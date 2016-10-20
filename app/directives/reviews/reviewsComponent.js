(function(){
	angular.module('myRetail')
		.component('reviews', {
				templateUrl: './app/directives/reviews/reviewsTemplate.html',
				controller: 'ReviewsController',
				controllerAs: 'r'
		});
})();