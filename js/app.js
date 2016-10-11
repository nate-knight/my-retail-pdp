(function(){
	
	angular.module('myRetail', ['ngSanitize'])

	
	.controller('ItemController', ['Item','$scope', function(Item,$scope){

		//initialize qty
		$scope.quantity = 0;
	   
		$scope.decreaseQuantity = function(){
			$scope.quantity > 0 && $scope.quantity--;
	   	};

	   	$scope.increaseQuantity = function(){
	   		$scope.quantity++;
	   	};

	   	Item.then(function(data){
        	$scope.item = data;
        	$scope.item.offerPrice = data.Offers[0].OfferPrice[0];
            $scope.item.features = data.ItemDescription[0].features;
       	});

	    // Item.all()
     //     .success(function(data){
     //        var item = data.CatalogEntryView[0];
     //        $scope.item = item;
     //        //$scope.currentImgUrl = item.Images[0].PrimaryImage[0].image;
     //        //$scope.item.alternateImages = item.Images[0].AlternateImages;

     //        //add additional fields for view simplicity
     //        $scope.item.offerPrice = item.Offers[0].OfferPrice[0];
     //        $scope.item.features = item.ItemDescription[0].features;
     //        $scope.item.customerReview = item.CustomerReview[0];

     //        // //gallery
     //        // $scope.item.imageCount = item.Images[0].imageCount;

     //        // //add alternate images to images array
     //        // $scope.images = item.Images[0].AlternateImages.map(function(obj){
     //        // 	return obj.image;
     //        // });
     //        // //add primary image to 2nd position in images array
     //        // $scope.images.splice($scope.activeImgIndex,0,item.Images[0].PrimaryImage[0].image);
           
     //        // $scope.activeImgUrl = $scope.images[$scope.activeImgIndex];

     //      })
	}])

	.controller('ReviewsController', function($scope,Item){
		
		var vm = this;

		//$scope.review ={};

		$scope.getNum = function(n) {
    		return new Array(n);   
		}

		Item.then(function(data){
          //$scope.review = data.CustomerReview[0];
          var data = data.CustomerReview[0];
          vm.reviews = data;
          vm.pro = data.Pro[0];
          vm.proDate = new Date(data.Pro[0].datePosted);
          vm.con = data.Con[0];
          vm.conDate = new Date(data.Con[0].datePosted);
       	});

	})

	.controller('PromosController', function(Item, $scope){
		$scope.promos = ['spend $50, ship free', '$25 gift card with purchase of a select Ninja Blender'];
	})

	.controller('GalleryController', function(Item, $scope){
		
		var gallery = this;
		//Gallery
	   	$scope.images = [];
	   	$scope.activeImgIndex = 1;
	   	$scope.activeImgUrl = '';

	   	$scope.prevImage = function(){
	   		if ($scope.activeImgIndex > 0){
	   			$scope.activeImgIndex--;
		   		$('.gallery__thumbnails').animate({
			      left: "+=75px"
				    },500, function(){
				    	$scope.setActiveImg();
				    });
	   		}
	   	};
	   	
	   	$scope.nextImage = function(){
	   		if ($scope.activeImgIndex < $scope.imageCount - 1){
	   			$scope.activeImgIndex++;
				$('.gallery__thumbnails').animate({
			      left: "-=75px"
				    },500, function(){
				    	$scope.setActiveImg();
				    });
	   		}
	   	};

	   	$scope.setActiveImg = function(url){
	   		$scope.$apply(function(){
	   			$scope.activeImgUrl = $scope.images[$scope.activeImgIndex]
	   		});
	   	};

		Item.then(function(data){

			var images = data.Images[0];

        	$scope.images=images;
          		 
	        $scope.imageCount = images.imageCount;

	        //add alternate images to images array
	        $scope.images = images.AlternateImages.map(function(obj){
	        	return obj.image;
	        });

	        //add primary image to 2nd position in images array
	        $scope.images.splice($scope.activeImgIndex,0,images.PrimaryImage[0].image);
	       
	        $scope.activeImgUrl = $scope.images[$scope.activeImgIndex];
           
       	});
	   	//  Item.all()
	   	// .success(function(data){
	   	// 	var item = data.CatalogEntryView[0];
     //        $scope.item = item;

	   	// 	 //gallery
     //        $scope.item.imageCount = item.Images[0].imageCount;

     //        //add alternate images to images array
     //        $scope.images = item.Images[0].AlternateImages.map(function(obj){
     //        	return obj.image;
     //        });
     //        //add primary image to 2nd position in images array
     //        $scope.images.splice($scope.activeImgIndex,0,item.Images[0].PrimaryImage[0].image);
           
     //        $scope.activeImgUrl = $scope.images[$scope.activeImgIndex];
	   	// });

	})

	;

	

})();