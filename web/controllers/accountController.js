app.controller('joinController', function ($http, $scope, $window) {
	
    var me = this;
 
    $scope.Join = function () {
        $scope.message = undefined;
        $scope.isValid= true;

        var name =$scope.name;
        var surname =$scope.surname;
        var email =$scope.email;
        var password =$scope.password;
        var passwordConfirm =$scope.passwordConfirm;
        var data = {
            name: name,
            surname:surname,
            email:email,
			password:password
        
        };
        if(name ==undefined || surname== undefined){
            $scope.isValid = false;
            $scope.message = "Please your name and surname";
			return;
        }
        if(email===undefined){
            $scope.message = "Please enter a valid email address!"
            $scope.isValid = false;
         return;
        }
		  if(password ==undefined || passwordConfirm== undefined){
			   $scope.message = "Please create your password!"
            $scope.isValid = false;
         return;
		  }
        if(password!==passwordConfirm){
            $scope.message = "Password do not match!"
            $scope.isValid = false;
            return;  
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("Reg"), data)
            .success(function (response, status) {
                if (parseInt(response)===1) {
                    localStorage.setItem("name", $scope.name);
                    localStorage.setItem("email", $scope.email);
                    $window.location.href = "Personal-Information";
                   }
               else{
				   $scope.message = response;
			   }

            });
        }
        else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };
	
	function SendEmailToClient(message,emailFrom, subject){
		var data = {
			emailTo: localStorage.getItem("email"),
			emailFrom: emailFrom,
			subject :subject
		}
		$http.post(GetApiUrl("EmailClient"), data)
            .success(function (response, status) {
				console.log("Email send");
            });
	}
});

app.controller('moreDetailsController', function ($http, $scope, $window) {
	
    var me = this;
 $scope.countries = ['South Africa','Unite States']
    $scope.Save = function () {
        $scope.message = undefined;
        $scope.isValid= true;

		var cell     = $scope.cell; 
		var address  = $scope.address;  
		var idnum    = $scope.id;
		var country  = $scope.selectCountry;  
		var city     = $scope.city;
		
        var data = {
            cell: cell,
            address:address,
            idnum:idnum,
            country:country,
			city:city,
			email: localStorage.getItem("email")
        
        };
if(cell ==undefined || address== undefined || idnum ==undefined || country== undefined || city ==undefined){
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
			return;
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("UpdatePersonalInfo"), data)
            .success(function (response, status) {
                if (parseInt(response)===1) {
                    $window.location.href = "Banking-Details";
                   }
               else{
				   $scope.message = response;
			   }

            });
        }
        else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };
	
	function SendEmailToClient(message,emailFrom, subject){
		var data = {
			emailTo: localStorage.getItem("email"),
			emailFrom: emailFrom,
			subject :subject
		}
		$http.post(GetApiUrl("EmailClient"), data)
            .success(function (response, status) {
				console.log("Email send");
            });
	}
});

app.controller('bankingDetailsController', function ($http, $scope, $window) {
	
    var me = this;
 $scope.banks = ['Absa',
'African Bank Limited',
'Capitec Bank',
'First National Bank',
'Bidvest Bank Limited',
'Nedbank Limited',
'Imperial Bank South Africa',
'Investec Bank Limited',
'Sasfin Bank Limited'
];
    $scope.Save = function () {
        $scope.message = undefined;
        $scope.isValid= true;
//				bankname, accountnumber
		var bankname     = $scope.bankname; 
		var accountnumber  = $scope.accountnumber;  
		
		
        var data = {
            bankname: bankname,
            accountnumber:accountnumber,
			email: localStorage.getItem("email")
        
        };
if(bankname ==undefined || accountnumber== undefined ){
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
			return;
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("UpdateBankingInfo"), data)
            .success(function (response, status) {
                if (parseInt(response)===1) {
					localStorage.setItem("isLoggedIn", true);
                    $window.location.href = "Dashboard";
                   }
               else{
				   $scope.message = response;
			   }

            });
        }
        else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };
	
	function SendEmailToClient(message,emailFrom, subject){
		var data = {
			emailTo: localStorage.getItem("email"),
			emailFrom: emailFrom,
			subject :subject
		}
		$http.post(GetApiUrl("EmailClient"), data)
            .success(function (response, status) {
				console.log("Email send");
            });
	}
});

app.controller('logoutController', function ($http, $scope, $window) {
    localStorage.clear();
    $window.location.href = "#/";

});


app.controller('loginController', function ($http, $scope, $window) {
    if(localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("idnum") === "admin"){
        $window.location.href = "Admin-dashboard";
    }
	 else if(localStorage.getItem("isLoggedIn") === "true"){
        $window.location.href = "Dashboard";
    }
    var me = this;
       $scope.Login = function () {
           $scope.message = undefined;
           $scope.isValid= true;
           var email =$scope.email;
           var password =$scope.password;
          
   
           var data = {
               email:email,
               password: password
           };
         
           if(email===undefined){
               $scope.message = "Please enter a valid email address!"
               $scope.isValid = false;
            return;
           }
           if(password== undefined){
               $scope.message = "Enter your password!"
               $scope.isValid = false;
               return;  
           }
          
           if ($scope.isValid) {
   
               $http.post(GetApiUrl("Login"), data)
               .success(function (response, status) {
                if (response.length !== 0) {
                    var user = response.user[0];
                    localStorage.setItem("id", user.id);
                    localStorage.setItem("name", user.name);
                    localStorage.setItem("surname", user.surname);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("cell", user.cell);
                    localStorage.setItem("address", user.address);                    
                    localStorage.setItem("idnum", user.idnum);
                    localStorage.setItem("bankname", user.bankname);
                    localStorage.setItem("accountnumber", user.accountnumber);
                    localStorage.setItem("isLoggedIn", true);
					if(user.idnum ==="admin"){
						$window.location.href = "Admin-dashboard";
					}else{
                    $window.location.href = "Dashboard";
					}
                    me.message = undefined;
                 }
                else {
                    $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                }
   
               });
           }
           else {
               $scope.message = "Please make sure that all required fields are NOT empty"
           }
       };

});

app.controller('adminController', function ($http, $scope, $window,$timeout) {
    if(localStorage.getItem("isLoggedIn") !== "true"){
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.wait = "Please wait...";

    $timeout(function () {
        //Get investments    
    var data = {
        email: localStorage.getItem("email")
    };
    $http.post(GetApiUrl("GetInvestmentsAdmin"), data)
    .success(function (response, status) {
		    $scope.wait = undefined;

        if (response.data !== undefined) {
            $scope.investments = response.data;
        }
    });
    }, 2000)
	
	// get users
	
	 //Get Customers   
 $timeout(function () {	 
    var data = {
        table: "user",
		condition: " 1 "
    };
    $http.post(GetApiUrl("Get"), data)
    .success(function (response, status) {
		    $scope.wait = undefined;

        if (response.data !== undefined) {
            $scope.users = response.data;
        }
    });
    }, 2000)
	
	// Selected UserId
	$scope.More = function(user){
		alert(user.name);
	}
	//selected investemnt
	// Selected UserId
	$scope.Verify = function(investemnt){
		 $scope.message = undefined;
           var data = {
               id:investemnt.id,
			   status: "Active"
           };
         
        $http.post(GetApiUrl("Verify"), data)
               .success(function (response, status) {
                if (parseInt(response)=== 1) {
				   investemnt.status = "Active";
                 }
                else {
                 //   $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                }
   
               });
          
       };
	
});