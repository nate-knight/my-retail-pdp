(function(){
	angular.module('myRetail')
		.directive('reviews', ['Item', function(Item){

			return {
				restrict: 'E',
				templateUrl: './app/components/reviews/reviewsView.html',
				scope: {},
				controller: 'ReviewsController',
				controllerAs: 'r'
			}

		}]);
})();