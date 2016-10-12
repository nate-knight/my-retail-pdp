(function(){
	angular.module('myRetail')
		.controller('ReviewsController',function(Item, $scope){
			var vm = this;

				$scope.getNum = function(n) {
		    		return new Array(n);   
				};

				Item.then(function(data){
		          vm.reviews = data;
		          vm.pro = data.CustomerReview[0].Pro[0];
		          vm.proDate = new Date(data.CustomerReview[0].Pro[0].datePosted);
		          vm.con = data.CustomerReview[0].Con[0];
		          vm.conDate = new Date(data.CustomerReview[0].Con[0].datePosted);
		       	});
		});
}());