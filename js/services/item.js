(function(){

angular.module('myRetail')
.factory('Item', function ItemFactory($q, $http){
	// return {
	// 	all : function(){
	// 		return $http({ method: 'GET', url: './js/data/item-data.json'});
	// 	}
	// }

		// $http.get('./js/data/item-data.json')
		// .success(function(data){
		// 	return data;
		// });

	// $http.get('./js/data/item-data.json')
	//   .success(function(data){

	//   });

	 var deferred = $q.defer();

    $http.get('./js/data/item-data.json').success(function(data) {
        deferred.resolve(data.CatalogEntryView[0]);
    });

    return deferred.promise;
    
});

})();
