
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

        $timeout(function() {
            $http.post(GetApiUrl("GetAdminDashCounts"), {})
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.counts = response.data;
                        $scope.wait = "";
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

app.controller('selectController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.key = localStorage.getItem("key");
    $scope.wait = "Please wait...";
    $scope.GetInvestments = function() {

        $timeout(function() {
		
			if( $scope.key ==="users"){
			var	data = {table:"user", condition:" role <> 'admin'"}
			 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.investments = response.data;
                        $scope.wait = "";
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
			}else{
				var data = {table:"investment", condition:" status= '"+$scope.key +"'"}
				 $http.post(GetApiUrl("Get"), data)
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.investments = response.data;
                        $scope.wait = "";
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
      	$window.location.href = "Allocate";
    } 
	$scope.Delete = function(user) {
       localStorage.setItem("userToDelete", user.id);
       localStorage.setItem("userToName", user.name);
      	$window.location.href = "Confirm";
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
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.investmentId = localStorage.getItem("investmentId");
    $scope.investmentName = localStorage.getItem("investmentName");
    $scope.amountInvested = localStorage.getItem("amountInvested");
    $scope.investorEmail = localStorage.getItem("investorEmail");
    $scope.cell = localStorage.getItem("investorCell");
	
	$scope.GetWithdrawals = function(withdrowal){
	 $timeout(function() {
            $http.post(GetApiUrl("GetWithdraw"), {email:$scope.investorEmail})
                .success(function(response, status) {
                    if (response !== undefined || response !== null) {
                        $scope.withdrawals = response.data;
                        $scope.wait = "";
                    } else {
                        //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                    }

                });
        }, 2000)
	};
	$scope.Allocate = function(withdrowal){
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
			var to ="mrnnmthembu@gmail.com";
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
			
		}
	}
   
});
