(function(){
	angular.module('myRetail')
		.directive('reviewsModule', ['Item', function(Item){

			return {
				restrict: 'E',
				templateUrl: 'reviewsView.html'
			}
		}]);

})();