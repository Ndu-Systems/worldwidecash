app.controller('joinController', function ($http, $scope, $window,$location) {
// CHECK FOR THE PARENT Link
	var baseUrlMain = $location.absUrl();
	if(baseUrlMain.includes("link=")){
		$scope.parentlink = baseUrlMain;
	}else{
		$scope.parentlink="";
	}
 
    $scope.Join = function () {
        $scope.message = undefined;
        $scope.isValid= true;

        var name =$scope.name;
        var surname =$scope.surname;
        var email =$scope.email;
        var password =$scope.password;
        var passwordConfirm =$scope.passwordConfirm;
		var code =  Math.floor(4000*(Math.random()+1));
        var data = {
            name: name,
            surname:surname,
            email:email,
			password:password,
			code:code,
			baseUrl :base,
			parentlink: $scope.parentlink,
        
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
		  if(password ==undefined){
			   $scope.message = "Please create your password!"
            $scope.isValid = false;
         return;
		  }
		   if(password.length < 8){
			   $scope.message = "Your password has to be at least 8 characters long."
            $scope.isValid = false;
         return;
		  }
		   if(passwordConfirm== undefined){
			   $scope.message = "Please confirm your password!"
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
					 localStorage.setItem("code", code);
					 localStorage.setItem("isEmailVerified", 0);
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
	
	
});

app.controller('moreDetailsController', function ($http, $scope, $window) {
	
 //mail data
 if(parseInt(localStorage.getItem("code")) !== 0){
		var maildata = {
			emailTo: localStorage.getItem("email"),
			emailFrom: "account@worldwidecash.co.za",
			subject :"Verification Code",
			name:localStorage.getItem("name"),
			msg  : "Welcome to World wide cash,Your verification code is "+ localStorage.getItem("code")
			}
					
			//send mail
			$http.post("http://ndu-systems.net/demo/worldwidecash2/api/emailClient.php", maildata)
				.success(function (response, status) {
				console.log("Email sent");
            });
 }
			//send mail
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
					localStorage.setItem("cell", $scope.cell);
					localStorage.setItem("address", $scope.address);
					localStorage.setItem("idnum", $scope.idnum);
					localStorage.setItem("country", $scope.country);
					localStorage.setItem("city", $scope.city);

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

$scope.accountTypes = ['Cheque','Savings'];
    $scope.Save = function () {
        $scope.message = undefined;
        $scope.isValid= true;
//				bankname, accountnumber
		var bankname     = $scope.bankname; 
		var accountnumber  = $scope.accountnumber;  
		var accountType  = $scope.accountType;  
		var branch  = $scope.branch;  
		
        var data = {
            bankname: bankname,
            accountnumber:accountnumber,
			accountType:accountType,
			branch:branch,
			email: localStorage.getItem("email")
        
        };
if(bankname ==undefined || accountnumber== undefined || accountType == undefined || branch == undefined ){
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
			return;
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("UpdateBankingInfo"), data)
            .success(function (response, status) {
                if (parseInt(response)===1) {
					localStorage.setItem("isLoggedIn", true);
					localStorage.setItem("bankname", $scope.bankname);
					localStorage.setItem("accountnumber", $scope.accountnumber);
					localStorage.setItem("accountType", $scope.accountType);
					localStorage.setItem("branch", $scope.branch);
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
    $window.location.href = "Home";

});


app.controller('loginController', function ($http, $scope, $window) {
    if(localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("role") === "admin"){
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
                    localStorage.setItem("role", user.role);
					localStorage.setItem("isEmailVerified", user.isEmailVerified);
                    localStorage.setItem("code", user.code);
                    localStorage.setItem("mylink", user.mylink);
					
                    localStorage.setItem("isLoggedIn", true);
					if(user.role ==="admin"){
						$window.location.href = "Admin-dashboard";
					}else{
                    $window.location.href = "Dashboard";
					}
                    me.message = undefined;
                 }
                else {
                    $scope.message = "Oops! Your user name or password is incorrect please CHECK and try again.";
                }
   
               });
           }
           else {
               $scope.message = "Please make sure that all required fields are NOT empty"
           }
       };

});

