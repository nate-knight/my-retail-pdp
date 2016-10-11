(function(){

angular.module('myRetail')
.factory('Item', function ItemFactory($q, $http){
	
	var deferred = $q.defer();

    $http.get('./app/data/item-data.json').success(function(data) {
        deferred.resolve(data.CatalogEntryView[0]);
    });

    return deferred.promise;
    
});

})();
