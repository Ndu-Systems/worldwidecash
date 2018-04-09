app.controller('commonController', function($http, $scope, $window, $timeout) {
	// common jobs 
	// set investment to active
	$scope.MakeDreamsActive = function() {
		let investmentLS = [];
        $timeout(function() {
            //Get Investments   
            var data = {
                userID: $scope.userID
            };
            $http.post(GetApiUrl("GetAllInvestments"), data)
                .success(function(response, status) {
                    $scope.wait = undefined;
					
                    if (response.data !== undefined) {
						$scope.investments = response.data;
					//console.log($scope.investments);
					
						$.each(	$scope.investments, function(i, item){
							
						let keepers = item.keepers.keepers;
						let isPaid = true;
						if(item.keepers.length ==0){
							isPaid = false;
						}
						$.each(	keepers, function(i, keeper){
						
							//console.log(`${item.id} - ${keeper.investmentID} - ${item.dream} - ${keeper.status}`);
						
						if(keeper.status != 'confirmed'){
							isPaid = false;
						}
						
						});
						
						if(isPaid){
						if(item.status != 'active')	{
							var data = {
								id:item.id,
								name : item.name,
								amount: item.amountInvested,
								email:item.email,
								userID: item.userID
							};
							$timeout(function() {
							$http.post(GetApiUrl("MakeDreamActiveAuto"),data)
							.success(function(response, status) {
								console.log(response);
							});
						}, 3000);
						console.log(item);
						}
					}
						});
					//	console.log(investmentLS);

                    }
                });

        }, 3000)
	};
	$scope.MakeDreamsActive();
});