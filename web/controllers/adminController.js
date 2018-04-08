
app.controller('adminDashController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
	// send notification to the keeper , when from locate page

			if(localStorage.getItem("Notify2")==="true"){
			SendMail(localStorage.getItem("emailFrom"),localStorage.getItem("to"),localStorage.getItem("nameTo"),localStorage.getItem("subject"),localStorage.getItem("msg"));
			localStorage.setItem("Notify2",false);
			}
	
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.wait = "Please wait...";
    $scope.GetCounts = function() {
Load();
        $timeout(function() {
            $http.post(GetApiUrl("GetAdminDashCounts"), {})
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.counts = response.data;
						$scope.wait = "";
						Stop();
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
        }, 2000)
    };

    $scope.More = function(gh) {
	localStorage.setItem("key", gh.key.toLowerCase());
        $window.location.href = "Select";
    }
});
app.controller('amountKeptController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
	$scope.GetKeepers = function() {
		
        $timeout(function() {
		
		
			
				var data = {table:"investment", condition:" amountkept > 0 "}
				 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.investments = response.data;
                        $scope.wait = "";
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
			
           
        }, 2000)
    };
});
app.controller('selectController', function($http, $scope, $window, $timeout) {
	Load();
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.key = localStorage.getItem("key");
    $scope.wait = "Please wait...";
    $scope.GetInvestments = function() {
		if($scope.key ==="amount kept"){
			$window.location.href = "Amount-Kept";
		}
		if($scope.key ==="messages"){
				$window.location.href = "Messages";
		}
		if($scope.key ==="keepers"){
			$window.location.href = "Keepers";
	}
	
	if($scope.key ==="withdrawals"){
		$window.location.href = "Withdrawals";
}
if($scope.key ==="paid"){
	$window.location.href = "Piad-Dreams";
}
        $timeout(function() {
		
			if( $scope.key ==="users"){
			var	data = {table:"user", condition:" role <> 'admin'"}
			 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.investments = response.data;
						$scope.wait = "";
						Stop();
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
			}
			
			else{
				var data = {status:$scope.key}
				 $http.post(GetApiUrl("GetInvestmentsByStatus"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.investments = response.data;
						$scope.wait = "";
						Stop();
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
			}
           
        }, 2000)
    };

    $scope.Allocate = function(investment) {
       localStorage.setItem("investmentId", investment.id);
       localStorage.setItem("investmentName", investment.name);
       localStorage.setItem("amountInvested", investment.amountInvested);
       localStorage.setItem("investorEmail", investment.email);
	   localStorage.setItem("investorCell", investment.cell);
	   localStorage.setItem("pendingbalance", investment.pendingbalance);
      	$window.location.href = "Allocate";
    } 
	$scope.Delete = function(user) {
       localStorage.setItem("userToDelete", user.id);
       localStorage.setItem("userToName", user.name);
      	$window.location.href = "Confirm";
	}
	$scope.ConfirmPayMentAdmin = function(investment){
		console.log(investment);
			let investmentId = investment.id;
			let d = new Date();
			let data = {
			id: investmentId,
			amount: investment.amountInvested,
			email:investment.email,
			comment: "Payment verfied by Admin : "+ d
		};
		$http.post(GetApiUrl("VerifyPayMentAdmin"), data).success(function(data, status) {
				alert("Payment verfied by Admin : " + d);
				$window.location.href = "Admin-dashboard";
		
		})
	}
	$scope.UnLock = function(user){
let data = {
	email: user.email
}
$http.post(GetApiUrl("UnlockUser"), data).success(function(data, status) {
	if (parseInt(data) === 1) {
		alert(user.name + " Unlocked");
		$window.location.href = "Admin-dashboard";
	
	} else {
		$scope.error = "Something went wrong, please try again.";
	}
})
	$scope.UnLock = function(user){

	}

	}
	$scope.Lock = function(user){
		let data = {
			email: user.email
		}
		$http.post(GetApiUrl("LockUser"), data).success(function(data, status) {
			if (parseInt(data) === 1) {
				alert(user.name + " Locked");
				$window.location.href = "Admin-dashboard";
			
			} else {
				$scope.error = "Something went wrong, please try again.";
			}
		})
			$scope.UnLock = function(user){
		
			}
	}
});

app.controller('confirmController', function($http, $scope, $window, $timeout) {
	 $scope.id = localStorage.getItem("userToDelete");
	 $scope.name = localStorage.getItem("userToName");
	 $scope.Delete = function() {
          $http.post(GetApiUrl("DeleteUser"), {id: $scope.id})
                .success(function(response, status) {
                        	$window.location.href = "Select";

                });
    }
});


app.controller('allocateController', function($http, $scope, $window, $timeout) {
	Load();
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.investmentId = localStorage.getItem("investmentId");
    $scope.amountInvested = localStorage.getItem("amountInvested");
	$scope.investorEmail = localStorage.getItem("pendingbalance");
	$scope.pendingbalance = localStorage.getItem("pendingbalance");
	$scope.userID = localStorage.getItem("userID");
    $scope.cell = localStorage.getItem("investorCell");
	
	$scope.GetWithdrawals = function(){
	 $timeout(function() {
            $http.post(GetApiUrl("GetWithdraw"), {investmentId:$scope.investmentId})
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
						$scope.withdrawals = response.data;
						$scope.GetInvestmentById($scope.investmentId);
						Stop();
                        $scope.wait = "";
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
		}, 2000)
		
	};

	$scope.GetInvestmentById = function(id){
		$http.get(GetApiUrlForID(`GetInvestmentById.php?id=${id}`))
    	.then(function(response) {
			console.log(response);
			 let investementObj = response.data.data[0];
			 $scope.numberOfKeepers =  investementObj.numberOfKeepers;
			 $scope.keepersLS =   investementObj.keepers.keepers;
			 $scope.keeperSumAmount =  investementObj.amountKept;
			 $scope.pendingbalance =  $scope.amountInvested  -  $scope.keeperSumAmount;
			 $scope.investmentName = investementObj.name;
			 if($scope.pendingbalance ==0 || $scope.pendingbalance == "0"){
					alert("All amount was allocated successfully");
					//set the dream to allocated   UpdateDreamToAllocated
					let data = {
						id:parseInt( $scope.investmentId)
					};
					$http.post(GetApiUrl("UpdateDreamToAllocated"), data)
                	.success(function(response, status) {});
			 }
			 //  console.log(investementObj );
			});
	
	};
	
	
	$scope.Allocate = function(withdrawal){
	Load();
			let amountInvested = parseFloat($scope.amountInvested);
			let amount = parseFloat( withdrawal.balance);
			let pendingbalance = $scope.pendingbalance;
			// zero case - exit
			if(pendingbalance<=0){
				alert("All amount is kept!");
				Stop();
				return false;
			}
			// case one : donate R1000 to person who need to get paid R3000, correct!
			if(pendingbalance <= amount){
				let  data ={
					amount:pendingbalance,
					investmentID:parseInt($scope.investmentId),
					witdrawalID:parseInt(withdrawal.id),
					balance : withdrawal.balance - pendingbalance
				 };
				console.log(withdrawal);
				$http.post(GetApiUrl("AllocateAkeeper"), data)
                .success(function(response, status) {
					console.log(response);
					
                });

			}

			if(pendingbalance > amount){
				let  data ={
					amount:amount,
					investmentID:parseInt($scope.investmentId),
					witdrawalID:parseInt(withdrawal.id),
					balance : withdrawal.balance - amount
				 };
				console.log(withdrawal);
				$http.post(GetApiUrl("AllocateAkeeper"), data)
                .success(function(response, status) {
					console.log(response);
					if(pendingbalance<=0){
						alert("All amount is kept!");
						return false;
					}
                });

			}
				if(amountInvested > amount){
					console.log($scope.amountInvested);
				}
			$scope.GetWithdrawals();
	
			
		/*
		var pendingBalance=0;
		if(withdrowal.pendingbalance === "--"){
		 pendingBalance = parseFloat(withdrowal.balance) - parseFloat($scope.amountInvested);
		}else{
		pendingBalance = parseFloat(withdrowal.pendingbalance) - parseFloat($scope.amountInvested);
		
		}
		if(pendingBalance<0){
		alert("Amounts do not balance");	
		}else{
			
			
			//update pending balance
			
			 $http.post(GetApiUrl("UpdatePendingBalance"), {pendingbalance:pendingBalance,id:withdrowal.id,email:withdrowal.email,orderId: $scope.investmentId})
                .success(function(response, status) {
                  $scope.GetWithdrawals();
				  
				  // allocated order email
			var emailFrom ="noreply@funderslife.com";
			var to =localStorage.getItem("investorEmail");
			var name =$scope.investmentName;
			var subject ="FundersLife-Order allocated";
			var msg ="Your order has been allocated, please donate R" + $scope.amountInvested +" to " + withdrowal.name;
			msg = msg+ response
			SendMail(emailFrom,to,name,subject,msg);
			
			// Notify kepper
			var msg2 = "This is to confirm that "+$scope.investmentName +"  will be contributing towards your dream ("+withdrowal.dream+") . You can contact them at "+$scope.cell+".";
			localStorage.setItem("msg",msg2);
			localStorage.setItem("emailFrom",emailFrom);
			localStorage.setItem("to",withdrowal.email);
			localStorage.setItem("nameTo",withdrowal.name);
			localStorage.setItem("subject","Withdraw allocation");
			localStorage.setItem("Notify2",true);
			
						alert("Order allocated");
			$window.location.href = "Admin-dashboard";
                });
			
		}*/
	}
   
});


app.controller('chatController', function($http, $scope, $window, $timeout,$interval) {
	 $scope.id = localStorage.getItem("userToDelete");
	 $scope.name = localStorage.getItem("userToName");
	 $scope.GetChats = function() {
		
          $http.post(GetApiUrl("GetChatsAdmins"), {id: $scope.id})
                .success(function(response, status) {
                        	$scope.chats = response.data;

                });
    }
	$scope.GetChats();
	$scope.OpenChats = function(chat){
		//alert(chat.senderEmail); 
		chat.status ="read";
		$scope.showTextArea = true;
		
		$scope.receiverEmail = chat.senderEmail;
		$scope.clientId = chat.clientId;
		$scope.receiverName=chat.senderName;
		   $http.post(GetApiUrl("GetMessagesOneOnOnes"), {clientId:chat.clientId})
                .success(function(response, status) {
                        	$scope.messages = response.data;

            });
	}
	
		$scope.RefreshCurrectChat = function(){
		   $http.post(GetApiUrl("GetMessagesOneOnOnes"), {clientId:$scope.clientId})
                .success(function(response, status) {
                        	$scope.messages = response.data;

            });
	}
	
	  $scope.Send = function(){
		  	if($scope.messageBody){
	  var data = {
		 senderEmail: "admin@mail.com",
		senderName:  "Admin",
		receiverEmail:  $scope.receiverEmail,
		receiverName:   $scope.receiverName,
		messageBody:  $scope.messageBody,
		clientId :  $scope.receiverEmail
	  };
	   $http.post(GetApiUrl("SendChat"), data)
            .success(function (response, status) {
			    $scope.RefreshCurrectChat();
				 $scope.messageBody="";
				 		//scroll
		var height = 0;
		$('.scrollable p').each(function (i, value) {
			height += parseInt($(".scrollable").height());
		});

		height += '';

		$('.scrollable').animate({
			scrollTop: height
		});
		
		//end scroll
            });
	  }
  }
  
  	// send with enter
	var input = document.getElementById("txtMessageBodyAdmin");
	input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      $scope.Send();
    }
});
//end  send with enter
 
    $interval(function () {
		 if($scope.clientId !== undefined){
     $scope.RefreshCurrectChat();
		 }
  }, 1000);
  
});



app.controller('CreateAllocationController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
 
	// get users list 
	$scope.GetUsers = function(withdrowal){
	  $timeout(function() {
		
			var	data = {table:"user", condition:" role <> 'admin'"}
			 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.users = response.data;
                        $scope.wait = "";
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
			
			
		
        }, 2000)
	};
	$scope.Select = function(user){
		$scope.email = user.email;
	    $scope.userName = user.name;
		$scope.cellNo =user.cell;
		$scope.search = user.email;
		$scope.userID = user.id;
	}

	$scope.Withdraw = function () {
		if($scope.email){
			if(!$scope.amount){
				alert("Enter amount");
				return false;
				}
		var data = {
			userID : $scope.userID,
			email:$scope.email,
			investemntId: 0,
			amount: $scope.amount,
			name: $scope.userName,
			balance: $scope.amount,
			dream: "Allocated dream"
		};
		$http.post(GetApiUrl("CreateAllocationForAUser"), data)
			.success(function (response, status) {
				$scope.message = "Your request has been submitted, we will notify you as soon as allocation is found!"
				$scope.showDonateButton = false;
				$scope.showDashteButton = true;

				// notify
				var msg = "Your request has been submitted, we will notify you as soon as allocation is found!";
				SendMail("noreply@funderslife.com", $scope.email, $scope.name, "Withdrawal Notification " + $scope.dream, msg);
				alert("withdrawal request  created!");
				$window.location.href = "Allocate";
				
			});
			}else{
		alert("Select the user first or create a new user");
	}
	};
	
});

app.controller('keepersController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }

	// get users list 
	$scope.GetKeepers = function(){
	  $timeout(function() {
			 $http.post(GetApiUrl("GetKeepers"), {})
                .success(function(response, status) {
					if(response !== undefined){
						$scope.investments = response.data;
						
					}
                   console.log(response);
                });
			
			
		
        }, 500)
	};

	$scope.MoreOptions = function(investment){
		localStorage.setItem("keep_id", investment.id);
		localStorage.setItem("keep_amountkeepable", investment.amountkeepable);
		localStorage.setItem("keep_name", investment.name);
		localStorage.setItem("keep_email", investment.email);
		$window.location.href = "Allocate-Funds-To-Keep";
	}

});
app.controller('allocateFundsToKeepController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
$scope.id = localStorage.getItem("keep_id");
$scope.amountkeepable = localStorage.getItem("keep_amountkeepable");
$scope.name = localStorage.getItem("keep_name");
$scope.email = localStorage.getItem("keep_email");

$scope.Allocate = function(){
	$scope.error= undefined;
	if($scope.amount_requested_to_keep && $scope.amount_requested_to_keep <= $scope.amountkeepable  ){
		let data = {
			amount_requested_to_keep:$scope.amount_requested_to_keep,
			id: $scope.id
		}

		$http.post(GetApiUrl("AllocateAmountToKeep"),data)
		.success(function(response, status) {
			if(response !== undefined){
				let subject = "You have been allocated to keep funds";
				let msg = `You have been allocated to keep funds of R ${$scope.amount_requested_to_keep}. Please confirm the payment as soon as you receive it.`;
				SendMail("no-reply@funderslife.com",$scope.email ,$scope.name,subject,msg);
				// Create withdrwal
				$scope.CreateWithDrawalForFundKeepings();
			}
		  
		});
	
	}else{
		$scope.error = "Opps that amount is no valid!";
	}
}


$scope.CreateWithDrawalForFundKeepings = function() {
	$scope.error = "";

		var data = {
			email: $scope.email,
			investemntId: 0,
			amount: $scope.amount_requested_to_keep,
			name: $scope.name,
			balance: $scope.amount_requested_to_keep,
			dream: "You have been allocated to keep funds",
			isBonus: false
		};
		$http.post(GetApiUrl("Withdraw"), data)
			.success(function(response, status) {
				alert(`Allocation to keep funds of R ${ $scope.amount_requested_to_keep} created!`);
				$window.location.href = "Admin-dashboard";
			});
	
}
});

app.controller('withdrawalsController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }

	// get users list 
	$scope.GetWithdrawals = function(){
		let data = {
			table:"withdraw",
			condition : " 1 "
		}
	  $timeout(function() {
			 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
					if(response !== undefined){
						$scope.withdrawals= response.data;
						
					}
                   console.log(response);
                });
			
			
		
        }, 500)
	};

	$scope.MoreOptions = function(investment){
		localStorage.setItem("keep_id", investment.id);
		localStorage.setItem("keep_amountkeepable", investment.amountkeepable);
		localStorage.setItem("keep_name", investment.name);
		localStorage.setItem("keep_email", investment.email);
		$window.location.href = "Allocate-Funds-To-Keep";
	}

});


app.controller('paidDreamController', function($http, $scope, $window, $timeout) {
	if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }

$scope.GetNotifications = function(){
	let data = {
		
	}
  $timeout(function() {
		 $http.post(GetApiUrl("GetAllNotifications"), data)
			.success(function(response, status) {
				if(response !== undefined){
					$scope.nots = response.data;
				console.log(response);
					
				}
			
			});
		
		
	
	}, 500)

	$scope.Confirm = function(not) {
        //1. must go and update keeper status to confimed 
        //3. must go and update notifucation to  status to old , and updadated date to now  
        var data = {
            keeperID: not.keeperID,
            id : not.id
        };

        $http.post(GetApiUrl("ConfirmPayment"), data)
            .success(function(response, status) {
               $window.location.href = "Thanks-for-Verification -Admin";
            });

    }
}
});
