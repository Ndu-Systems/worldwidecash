app.controller('adminController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.wait = "Please wait...";

    $timeout(function() {
        //Get investments    
        var data = {
            email: $scope.email
        };
        $http.post(GetApiUrl("GetInvestmentsAdmin"), data)
            .success(function(response, status) {
                $scope.wait = undefined;

                if (response.data !== undefined) {
                    $scope.investments = response.data;
                }
            });
    }, 2000)

    // get users

    //Get Customers   
    $timeout(function() {
        var data = {
            table: "user",
            condition: " 1 "
        };
        $http.post(GetApiUrl("Get"), data)
            .success(function(response, status) {
                $scope.wait = undefined;

                if (response.data !== undefined) {
                    $scope.users = response.data;
                }
            });
    }, 2000)


    //  get pending get help
    var data = {
        email: $scope.email
    };
    $http.post(GetApiUrl("GetPendingGH"), data)
        .success(function(response, status) {

            $scope.wait = undefined;

            if (response.data !== undefined) {
                $scope.gethelps = response.data;
            }
        });

    // Selected UserId
    $scope.More = function(user) {
        //alert(user.name);
    }
    $scope.Match = function(gh) {
        localStorage.setItem("loanId", gh.id);
        localStorage.setItem("matches", gh.matches);
        localStorage.setItem("package", gh.package);
        localStorage.setItem("amountInvested", gh.amountInvested);
        $window.location.href = "Match";

    }
    //selected investemnt
    // Selected UserId
    $scope.Verify = function(investemnt) {
        $scope.message = undefined;
        var data = {
            id: investemnt.id,
            status: "Active"
        };

        $http.post(GetApiUrl("Verify"), data)
            .success(function(response, status) {
                if (parseInt(response) === 1) {
                    investemnt.status = "Active";
                } else {
                    //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                }

            });

    };

});

app.controller('adminDashController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
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
	
	$scope.GetWithdrawals = function(withdrowal){
	 $timeout(function() {
            $http.post(GetApiUrl("GetWithdraw"), {})
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
			// allocated order
			var emailFrom ="noreply@funderslife.com";
			var to ="mrnnmthembu@gmail.com";
			var name =$scope.investmentName;
			var subject ="FundersLife-Order allocated";
			var msg ="Your order has been allocated, please donate R" + $scope.amountInvested +" to " + withdrowal.name;
			SendMail(emailFrom,to,name,subject,msg);
			
			// Notify kepper
			var msg2 = "This is to confirm that Zama will be contributing towards your dream (Dream) outstanding balance R 430. You can contact them at 07545441245. To respond to your order please click here";
			//update pending balance
			
			 $http.post(GetApiUrl("UpdatePendingBalance"), {pendingbalance:pendingBalance,id:withdrowal.id,email:withdrowal.email,orderId: $scope.investmentId})
                .success(function(response, status) {
                  $scope.GetWithdrawals();

                });
			
		}
	}
   
});
