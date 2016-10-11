(function(){

	angular.module('myRetail', ['ngSanitize'])

	.controller('ItemController', ['Item','$scope', function(Item,$scope){

		$scope.quantity = 0;
	   
		$scope.decreaseQuantity = function(){
			$scope.quantity > 0 && $scope.quantity--;// jshint ignore:line
	   	};

	   	$scope.increaseQuantity = function(){
	   		$scope.quantity++;
	   	};

	   	Item.then(function(data){
        	$scope.item = data;
        	$scope.item.offerPrice = data.Offers[0].OfferPrice[0];
            $scope.item.features = data.ItemDescription[0].features;
       	});
	    
	}])

	.controller('ReviewsController', function($scope,Item){
		
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

	})

	.controller('PromosController', function(Item, $scope){
		$scope.promos = ['spend $50, ship free', '$25 gift card with purchase of a select Ninja Blender'];
	});

})();