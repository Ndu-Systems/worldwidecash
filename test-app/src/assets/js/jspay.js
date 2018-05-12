    $scope.Donate = function () {
        $scope.message = undefined;
        $scope.isValid = true;
        //				bankname, accountnumber
        let dream = $scope.dream;
        let amount = $scope.amount;
        let peroid = $scope.peroid;
        let user = JSON.parse(localStorage.getItem('UserData'));
        let isAkeeper = user.isAkeeper;
        let userID = user.id;


        let data = {
            dream: dream,
            amount: amount,
            peroid: peroid,
            userID: userID,
            isAkeeper: isAkeeper

        };
        if (peroid == undefined || amount == undefined || dream == undefined) {
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
            return;
        }

        if ($scope.isValid) {

            $http.post(GetApiUrl("Invest"), data)
                .then(function (response, status) {
                    if (parseInt(response.data) === 1) {
                        $scope.message = undefined;
                        $scope.showDonateButton = false;
                        $scope.showDashteButton = true;
                        $scope.success = "Your dream was created successfully, Please wait for a member to be assigned to you.";
                        SendMail("noreply@funderslife.com", localStorage.getItem("email"), localStorage.getItem("name"), "New Dream created", $scope.success);
                    } else {
                        $scope.message = response;
                    }

                });
        } else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };
