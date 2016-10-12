(function(){
	angular.module('myRetail')
		.directive('reviewsModule', ['Item', function(Item){

			return {
				restrict: 'E',
				templateUrl: './app/components/reviews/reviewsView.html',
				scope: {},
				controller: 'ReviewsController',
				controllerAs: 'r'
			}

		}]);
})();