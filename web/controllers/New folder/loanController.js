﻿app.controller('loanController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#/";
    }

});