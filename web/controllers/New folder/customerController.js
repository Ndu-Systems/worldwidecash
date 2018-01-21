﻿app.controller('customerController', function ($http, $scope, $window, $route) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#/";
    }
    //Add Customer
    $scope.message = undefined;
    var userId = localStorage.getItem("userId");

    $scope.addCustomer = function () {
        $scope.message = undefined;
        var data = {
            FirstName: $scope.firstname,
            LastName: $scope.surname,
            CellNumber: $scope.cellnumber,
            EmailAddress: $scope.email,
            IdNumber: $scope.idnumber,
            Location: $scope.location,
            Address: $scope.address,
            BankName: $scope.bankname,
            AccountNumber: $scope.accountnumber,
            BranchCode: $scope.branchcode,
            AccountType: $scope.accounttype,
            IsActive: 1,
            url:"http://localhost/git.fknloans/loans/api/uploads/profiles/5.png",
            userId: userId
        };

        if (data.FirstName === undefined || data.LastName === undefined || data.CellNumber === undefined || data.EmailAddress === undefined || data.Location === undefined || data.Address === undefined || data.BankName === undefined || data.AccountNumber === undefined || data.BranchCode === undefined || data.AccountType === undefined)
        {
            $scope.message = "All fields must be field in";
        }
        else {
            $http.post(GetApiUrl("AddCustomer"), data)
              .success(function (response, status) {
                  if (parseFloat(response) === 1) {
                      $window.location.href = "#home";
                      $scope.message = undefined;
                  }
                  else {
                      $scope.message = "Something Went Wrong Please contact system administrator."
                  }
              });
        }
    }

    //Customer Details to Display
    $scope.CustomerId = localStorage.getItem("CustomerId");
    $scope.FirstName = localStorage.getItem("FirstName");
    $scope.LastName = localStorage.getItem("LastName");
    $scope.CellNumber = localStorage.getItem("CellNumber");
    $scope.EmailAddress = localStorage.getItem("EmailAddress");
    $scope.IdNumber = localStorage.getItem("IdNumber");
    $scope.Location = localStorage.getItem("Location");
    $scope.Address = localStorage.getItem("Address");
    $scope.BankName = localStorage.getItem("BankName");
    $scope.AccountNumber = localStorage.getItem("AccountNumber");
    $scope.BranchCode = localStorage.getItem("BranchCode");
    $scope.AccountType = localStorage.getItem("AccountType");
    $scope.IsActive = localStorage.getItem("IsActive");
    $scope.url = localStorage.getItem("url");
    $scope.status = "Not Alegible for Loan";
    if ($scope.IsActive === "1") {
        $scope.status = "Alegible for Loan";
    }        
  

});
app.controller('editController', function ($http, $scope, $window, $route) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#/";
    }
    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };

    $scope.CustomerId = localStorage.getItem("CustomerId");
    $scope.FirstName = localStorage.getItem("FirstName");
    $scope.LastName = localStorage.getItem("LastName");
    $scope.CellNumber = localStorage.getItem("CellNumber");
    $scope.EmailAddress = localStorage.getItem("EmailAddress");
    $scope.IdNumber = localStorage.getItem("IdNumber");
    $scope.Location = localStorage.getItem("Location");
    $scope.Address = localStorage.getItem("Address");
    $scope.BankName = localStorage.getItem("BankName");
    $scope.AccountNumber = localStorage.getItem("AccountNumber");
    $scope.BranchCode = localStorage.getItem("BranchCode");
    $scope.AccountType = localStorage.getItem("AccountType");
    $scope.IsActive = localStorage.getItem("IsActive");    
    //var ModifyDate = localStorage.getItem("ModifyDate");
    //var ModifyUserId = localStorage.getItem("ModifyUserId");
    //var CreateDate = localStorage.getItem("CreateDate");
    //var CreateUserId = localStorage.getItem("CreateUserId");
    var userId = localStorage.getItem("userId");

    //resets 
    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };
    //Profile Pic Upload
    $scope.filesChanged = function (eml) {
        $scope.errorP = undefined;
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
        //alert($scope.filename);
        $scope.$apply();
    };

    $scope.SaveFile = function () {
        if ($scope.filename !== undefined) {
            var doc = "";
            var formData = new FormData();
            angular.forEach($scope.files, function (file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });
            $http.post(GetApiUrl("uploadProfile"), formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
            .success(function (resp) {
                var expectedDate = new Date();
                doc = GetHost(resp);
                //  alert(doc);                
                
                var data = {
                    doc: doc,
                    CustomerId: $scope.CustomerId                    
                };
                $http.post(GetApiUrl("EditProfile"), data).success(function (data, status) {
                    if (parseFloat(data) === 1) {
                        localStorage.setItem("url", doc);
                        $window.location.href = "#editCustomer";                       
                        $scope.errorP = undefined;
                    }
                    else {
                        $scope.errorP = "Something went wrong, please try again.";
                    }
                })
            })
        }
        else {
            $scope.errorP = "Please Upload Profile Picture format: PNG,JPEG,JPG,GIF!";
        }
    };


    $scope.editCustomer = function () {
        var data = {
            CustomerId: $scope.CustomerId,
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            CellNumber: $scope.CellNumber,
            EmailAddress: $scope.EmailAddress,
            IdNumber: $scope.IdNumber,
            Location: $scope.Location,
            Address: $scope.Address,
            BankName: $scope.BankName,
            AccountNumber: $scope.AccountNumber,
            BranchCode: $scope.BranchCode,
            AccountType: $scope.AccountType,
            IsActive: 1,
            userId: userId
        };
        if (data!==undefined) {
            $http.post(GetApiUrl("EditCustomer"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {

                    localStorage.setItem("CustomerId", $scope.CustomerId);
                    localStorage.setItem("FirstName", $scope.FirstName);
                    localStorage.setItem("LastName", $scope.LastName);
                    localStorage.setItem("CellNumber", $scope.CellNumber);


                    localStorage.setItem("EmailAddress", $scope.EmailAddress);
                    localStorage.setItem("IdNumber", $scope.IdNumber);
                    localStorage.setItem("Location", $scope.Location);
                    localStorage.setItem("Address", $scope.Address);

                    localStorage.setItem("BankName", $scope.BankName);
                    localStorage.setItem("AccountNumber", $scope.AccountNumber);
                    localStorage.setItem("BranchCode", $scope.BranchCode);
                    localStorage.setItem("AccountType", $scope.AccountType);                

                    $window.location.href = "#viewCustomer";
                    $scope.error = undefined;
                }
                else {
                    $scope.error = "Something Went Wrong, Please Try Again";
                }
            })

        }
        else {
            $scope.error = "Please do not submit EMPTY forms";
        }
    }

});
 