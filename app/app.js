"use strict";
(function(){
	
	angular.module('myRetail', ['ngSanitize','ngRoute'])

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

	.controller('PromosController', function(){
		this.promos = [
			'spend $50, ship free', 
			'$25 gift card with purchase of a select Ninja Blender'
		];
	});

})();
