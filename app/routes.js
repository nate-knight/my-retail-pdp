(function(){

	angular.module('myRetail')
		.config(function($routeProvider){
			$routeProvider.when('/',{
				templateUrl: './app/pages/product-detail.html'
			})
			.otherwise({redirectTo: '/'});
		})
})();
