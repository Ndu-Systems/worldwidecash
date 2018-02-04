app.controller('dashController', function ($http, $scope, $window,$timeout) {
	
    if(localStorage.getItem("isLoggedIn") !== "true" || localStorage.getItem("name") === undefined || localStorage.getItem("email") === undefined || localStorage.getItem("name") === "" || localStorage.getItem("email") === ""){
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.code = localStorage.getItem("code");
    $scope.cell = localStorage.getItem("cell");
    $scope.isEmailVerified = localStorage.getItem("isEmailVerified");
    $scope.wait = "Please wait...";
    $scope.success = "";
	// pannels to show
	$scope.showContent = true;

	$scope.showCompleteYourDetails = false;
	// Check if infromation is complete
	if($scope.cell === undefined  || $scope.cell === ""){
		$scope.showCompleteYourDetails = true;
		$scope.showContent = false;
	}
	
	$scope.Complete = function(){
		
	$window.location.href = "Personal-Information";

	}
	// Check if email verified
	if(parseInt($scope.isEmailVerified) === 0){
		$window.location.href = "Verify-Email";
	}

	$scope.GetInvestments = function(){
		$timeout(function () {
			//Get Investments   
		var data = {
			email: localStorage.getItem("email")
		};
		$http.post(GetApiUrl("GetInvestments"), data)
		.success(function (response, status) {
				$scope.wait = undefined;
	
			if (response.data !== undefined) {
				$scope.investments = response.data;
			}
		});
	
		}, 100)
		
	};
	
	$scope.UploadProofOfPayment = function(investment){
		localStorage.setItem("proofId",investment.id );
		$window.location.href = "Proof-Of-Payment.php";
	};
		
	
	
});

app.controller('emailVerifyController', function ($http, $scope, $window) {
	$scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
	$scope.code = localStorage.getItem("code");
	
	$scope.Verify = function(){
		
			$scope.success = undefined;
			$scope.error = undefined;
				if(parseInt($scope.mycode) === parseInt($scope.code)){
					var data = {
						email: $scope.email,
						code: $scope.code
					}
					  $http.post(GetApiUrl("VerifyEmail"), data)
					.success(function (response, status) {
							localStorage.setItem("isEmailVerified",1);
							 localStorage.setItem("isEmailVerified",1);							
							 $scope.isEmailVerified = 1;
							 // send welcome email with a link
							var emailFrom ="noreply@funderslife.com";
							var to =$scope.email;
							var name =$scope.name;
							var subject ="Welcome- Email verified";
							var msg ="Your email address was verified successfully, Here is your link " + response +". To get bonuses share this link and get 10% bonus on there first active dream!" ;
							SendMail(emailFrom,to,name,subject,msg);
							 $window.location.href = "Dashboard";
						   
					  
		
					});
					
				}else{
					$scope.error = "Code does not match!";
				}
			}
	 
				
	$scope.Resend = function(){ //UpdateVerificationCode
		$scope.code =  Math.floor(4000*(Math.random()+1));
			var maildata = {
				emailTo: localStorage.getItem("email"),
				emailFrom: "account@worldwidecash.co.za",
				subject :"Verification Code",
				name:localStorage.getItem("name"),
				msg  : "Welcome to World wide cash,Your verification code is "+ $scope.code
				}
						
				//send mail
				$http.post("http://ndu-systems.net/demo/worldwidecash2/api/emailClient.php", maildata)
					.success(function (response, status) {
						
					$scope.success = "The code was sent , check your emails";
					console.log("Email sent");
				});
		}
		
 });

app.controller('homeController', function ($http, $scope, $window) {
   
	
});
app.controller('sideMenu', function ($http, $scope, $window) {
  $scope.GetSideItems = function(){
	  var data = {
		  parentlink:localStorage.getItem("mylink"), 
		  email: localStorage.getItem("email")
	  };
	  $http.post(GetApiUrl("GetSideMenu"), data)
            .success(function (response, status) {
			   $scope.members = response.data[0].value;
			   $scope.bonus = response.data[1].value;
			  //alert($scope.members);
            });
  }
});

app.controller('ghController', function ($http, $scope, $window) {
   $scope.packeges = [200,300,400,500,1000,1500,2000,3000,5000,8000,10000,15000,20000,30000,40000,50000];
   $scope.peroids = [1,2,3,4,5,6,7,8,9,10,11,12];
$scope.showDonateButton = true;
$scope.showDashteButton = false;
$scope.GoToDashboard = function(){
	        $window.location.href = "Dashboard";

}
 $scope.Donate = function () {
        $scope.message = undefined;
        $scope.isValid= true;
//				bankname, accountnumber
		var dream     = $scope.dream; 
		var amount  = $scope.amount;  
		var peroid  = $scope.peroid;  
		
		
        var data = {
            dream: dream,
            amount:amount,
            peroid:peroid,
			email: localStorage.getItem("email"),
			name: localStorage.getItem("name"),
        
        };
if(peroid ==undefined || amount== undefined || dream== undefined  ){
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
			return;
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("Invest"), data)
            .success(function (response, status) {
                if (parseInt(response)===1) {
					$scope.message = undefined;
					$scope.showDonateButton = false;
					$scope.showDashteButton = true;
					$scope.success = "Success, Please wait for a member to be assigned to you.";
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

app.controller('investmentController', function ($http, $scope, $window) {
	
    if(localStorage.getItem("isLoggedIn") !== "true"){
        $window.location.href = "Login";
    }
   $scope.proofId = localStorage.getItem("proofId");
   $scope.upload = true;
   $scope.back = false;
   
  
    $scope.filesChanged = function (eml) {
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
      //  alert($scope.filename);
        $scope.$apply();
    };
   $scope.Invest = function(){
    if ($scope.filename !== undefined) {
        var doc = "";
        var formData = new FormData();
        angular.forEach($scope.files, function (file) {
            formData.append('file', file);
            formData.append('name', file.name)
        });

        $http.post(GetApiUrl("upload"), formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function (resp) {
            var expectedDate = new Date();
            doc = GetHost(resp);
          // alert(doc);
            var data = {
                doc: doc,
                id:$scope.proofId
            };
            $http.post(GetApiUrl("UpdatePOP"), data).success(function (data, status) {
                if (parseInt(data) === 1) {
                    //$window.location.href = "Dashboard";
                    $scope.success = "Thanks for your Proof of payment, we will verify and let you know as soon as possible.";
                    $scope.error = undefined;
					  $scope.upload = false;
					$scope.back = true;
                }
                else {
                    $scope.error = "Something went wrong, please try again.";
                }
            })
        })
    }
    else {
        $scope.error = "Please select the files!";
    }

   }
   
    $scope.Back = function(){
		 $window.location.href = "Dashboard";
	}

});

