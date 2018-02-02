app.factory('getDataService', function($http){
    return{
        getData: function(data, api){
            alert(data.email);
            $http.post(GetApiUrl(api), data)
            .success(function (response, status) {
                if (response) {
                  return response.data;
                   }
               else{
				  return null;
			   }

            });
        }

    };
}); 