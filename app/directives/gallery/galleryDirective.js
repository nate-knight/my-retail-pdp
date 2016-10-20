(function(){
	angular.module('myRetail')
		.component('productImgGallery',{

				bindings: {

				},
				templateUrl: './app/directives/gallery/galleryTemplate.html',
				controller: function($scope, Item){
					$scope.images = [];
				   	$scope.activeImgIndex = 1;
				   	$scope.activeImgUrl = '';

				   	$scope.prevImage = function(){
				   		if ($scope.activeImgIndex > 0){
				   			$scope.activeImgIndex--;
					   		$scope.slideImages(false);
				   		}
				   	};
				   	
				   	$scope.nextImage = function(){
				   		if ($scope.activeImgIndex < $scope.imageCount - 1){
				   			$scope.activeImgIndex++;
				   			$scope.slideImages(true);
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
				link: function(scope, el, attrs, controller){
					//jquery --> sorry :/
					scope.slideImages = function(direction){
						var distance = direction ? '-=75px' : '+=75px';
						$('.gallery__thumbnails').animate({
							left: distance
								},500, function(){
									scope.setActiveImg();
						});
					};

			      	// DOM manipulation to remove focus outline on mouse click for button events.
			      	// To do: create separate directives for custom buttons and add dom manipulation there.
					$('.button-reset').on('mousedown',function(e){
						$(this).css('outline', '0');
					});

					// re-add outline when keyboard Tab is pressed for accessibility
					$('body').keydown(function(e){
						e.keyCode === 9 && $('.button-reset').css('outline',''); // jshint ignore:line
					});
				}
			
		});
})();