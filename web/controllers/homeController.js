app.controller('homeController', function ($http, $scope, $window) {
   
	
});

app.controller('ghController', function ($http, $scope, $window) {
   $scope.packeges = [200,300,400,500,1000,1500,2000,3000,5000,8000,10000,15000,20000,30000,40000,50000]
   $scope.peroids = ['Month1',
'1 Months',
'2 Months',
'3 Months',
'4 Months',
'5 Months',
'6 Months',
'7 Months',
'8 Months',
'9 Months',
'10 Months',
'11 Months',
'12 Months'

];
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
			email: localStorage.getItem("email")
        
        };
if(peroid ==undefined || amount== undefined || dream== undefined  ){
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
			return;
        }
       
        if ($scope.isValid) {

            $http.post(GetApiUrl("SaveDream"), data)
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

app.controller('dashController', function ($http, $scope, $window,$timeout) {
    if(localStorage.getItem("isLoggedIn") !== "true"){
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.wait = "Please wait...";

    $timeout(function () {
        //Get Customers    
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
    }, 2000)
//alert( $scope.users[0].name)
});

app.controller('investmentController', function ($http, $scope, $window) {
    if(localStorage.getItem("isLoggedIn") !== "true"){
        $window.location.href = "Login";
    }
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
                date:getDate(),
                email: localStorage.getItem("email"),
                amount: $scope.amount
            };
            $http.post(GetApiUrl("Invest"), data).success(function (data, status) {
                if (parseInt(data) === 1) {
                    //$window.location.href = "Dashboard";
                    $scope.success = "Thanks for your investment, we will verify and let you know as soon as possible.";
                    $scope.error = undefined;
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

});