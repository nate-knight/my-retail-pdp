(function(){
	angular.module('myRetail')
		.directive('productImgGallery', ['Item',function(Item){

			return {
				restrict: 'E',
				templateUrl: './js/templates/gallery.html',
				scope: {},
				controller: function($scope){
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
				},
				link: {}
			}
		}]);
})();