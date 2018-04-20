app.controller("dashboardCtrl", function ($scope, $http, $window, $location) {
    //Load Old user
    $scope.user = JSON.parse(localStorage.getItem('UserData'));
    //Refresh user data
    $scope.RefreshUser = function () {
        let data = {
            email: $scope.user.email,
            password: $scope.user.password
        }
        $http.post(GetApiUrl("LoginUser"), data)
            .then(function (response) {
                console.log(response);
                if (response.data.id) {
                    localStorage.setItem("UserData", JSON.stringify(response.data));
                    $scope.LoadPage(response.data);

                } else {
                    $scope.LoadPage($scope.user);
                }
            });
    }
   

    $scope.LoadPage = function (user) {
        // Parse Object - new
        $scope.name = user.name;
        //ng shows
        $scope.showContent = true;
        $scope.showDonateLink = true;

        // dashboard data 
        $scope.investments = user.dreams.data;
        $scope.mylink =user.mylink;

        //side menu
        $scope.myrefferals = user.myrefferals;
        $scope.bonus = user.bonus;
        $scope.amountkept =user.amountkept;
    }

    // CLICK THE DREAM 
    $scope.InvestmentDetails = function (investment) {
        $http.get(GetApiUrlForID(`GetInvestmentById.php?id=${investment.id}`))
            .then(function (response) {
                if (response.statusText == "OK") {
                    localStorage.setItem("investmentDetails", JSON.stringify(response));
                    $location.path('/Dream-Details');
                }
                

            });
    }
  
})