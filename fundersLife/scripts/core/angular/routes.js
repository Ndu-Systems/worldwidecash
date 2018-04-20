app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        })
        .when("/Home", {
            templateUrl: 'components/home/home.html',
            controller:'HomeCtrl'
        })
        .when("/User-Login", {
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl'
        })
        .when("/Dashboard", {
            templateUrl: 'components/user-dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when("/Create-Dream", {
            templateUrl: 'components/create-dream/createdream.html',
            controller: 'createdreamCtrl'
        })
        .when("/My-Referrals", {
            templateUrl: 'components/my-referrals/referrals.html',
            controller: 'referralsCtrl'
        })
        .when("/My-Bonuses", {
            templateUrl: 'components/bonus/bonus.html',
            controller: 'bonusCtrl'
        })
        .when("/My-Profile", {
            templateUrl: 'components/profile/profile.html',
            controller: 'profileCtrl'
        })
        .when("/logout", {
            templateUrl: 'components/Logout/logout.html',
            controller: 'logoutCtrl'
        })
        .when("/Dream-Details", {
            templateUrl: 'components/dream-details/details.html',
            controller: 'dreamDetailsCtrl'
        })
        .when("/Proof-Of-Payment", {
            templateUrl: 'components/proof-of-payment/Proof-Of-Payment.html',
            controller: 'proofOfPaymentCtrl'
        })
        .when("/Admin-dashboard", {
            templateUrl: 'components/Admin-dashboard/Admin-dashboard.html',
            controller: 'adminDashCtrl'
        })
        .when("/Awaiting-allocation", {
            templateUrl: 'components/awaiting-allocation/awaiting-allocation.html',
            controller: 'awaitingallocationCtrl'
        })
        .when("/Allocate", {
            templateUrl: 'components/allocate/Allocate.html',
            controller: 'allocateCtrl'
        })
        .when("/Create-Allocation", {
            templateUrl: 'components/Create-Allocation/Create-Allocation.html',
            controller: 'createAllocationCtrl'
        })
        .when("/Paid-dreams", {
            templateUrl: 'components/Paid-dreams/Paid-dreams.html',
            controller: 'paidDreamsCtrl'
        })
        .when("/Active-dreams", {
            templateUrl: 'components/active-dreams/active.html',
            controller: 'activeCtrl'
        })

        .when("/More-in-Active", {
            templateUrl: 'components/active-dream-details/active-dream-details.html',
            controller: 'activedreamdetailsCtrl'
        })

        .when("/Allocated", {
            templateUrl: 'components/allocated-dreams/allocated-dreams.html',
            controller: 'allocatedCtrl'
        })
        .when("/User-list", {
            templateUrl: 'components/user-list/users.html',
            controller: 'usersCtrl'
        })
        .when("/Keepers", {
            templateUrl: 'components/Keepers/Keepers.html',
            controller: 'KeeperCtrl'
        })
        .when("/Allocate-Kept-Funds-To-Dreamer", {
            templateUrl: 'components/Allocate-Kept-Funds-To-Dreamer/Keepers.html',
            controller: 'AllocateKeptFundsToDreamerCtrl'
        })
        .when("/Allocate-Funds-To-Keep", {
            templateUrl: 'components/Allocate-Funds-To-Keep/Keepers.html',
            controller: 'AllocateFundsToKeepCtrl'
        })
});