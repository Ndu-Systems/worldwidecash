
 
Hi Ndumiso619,

Your payment of R200.00 has been confirmed by Lukemunsami .

To respond to this Order: TM9TJNKEWR, please click here.

Thank you for your assistance.

Regards,
MyLifeChange247 support




 
Hi Ndumiso619!

Your account has been created successfully.
Below are your login credentials.

Your username: Ndumiso619
Your password: Mth3mbu123
Here is you verification code 915863 which will verify your email and activate your account.

Here is you referral link :https://www.mylifechange247.com/follow/4605658

- Please note that if you do not donate at least once within 48 hours, your account will be deleted.
- Once someone you providing help to is allocated to you, you will have 72 hours to make payment, and click 'PAID', otherwise you will get blocked and your pending order cancelled.

Kind Regards,
MyLifeChange247 support



 
 
Hi Ndumiso619,

Your pending order has been processed successfully, and you will be providing help of ZAR200.00 to Lukemunsami .

Please assist with funds to the following account details, and contact the recipient for their real names in case you need them for bank deposits:

Bank: Capitec
Account Holder: Please contact recipient!
Account Number: 1340725140
Branch Code: 
Amount: R200.00
Contact Number: 0848842369

Additional Information:
No additional information provided!
Reference: Ndumiso619









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