(function(){
	angular.module('myRetail')
		.controller('ReviewsController',function(Item, $scope){
			var vm = this;

				//create array with a lenghth equal to the maximum stars
				vm.maxRating = 5;
				vm.ratingRange = new Array(vm.maxRating); 

				Item.then(function(data){
		          //vm.reviews = data;
		          var r = data.CustomerReview[0];

		          vm.pro = r.Pro[0];
		          vm.pro.reviewDate = new Date(r.Pro[0].datePosted);
		          vm.pro.rating = r.Pro[0].overallRating;

		          vm.con = r.Con[0];
		          vm.con.reviewDate = new Date(r.Con[0].datePosted);
		          vm.con.rating = r.Con[0].overallRating;
		          
		          vm.overallReview = r.consolidatedOverallRating;
		          vm.totalReviews = r.totalReviews;
		          
		       	});
		});
}());