(function(){
	
	require('../node_modules/angular/angular.min');
	require('../node_modules/angular-sanitize/angular-sanitize.min');
	require('../app/app');
	require('../app/components/gallery/galleryDirective');
	require('../app/components/reviews/reviewsController');
	require('../app/components/reviews/reviewsDirective');
	require('../app/services/item');



	// DOM manipulation to remove focus outline on mouse click for button events, and re-add outline when keyboard tab is pressed for accessibility
	window.onload = function(){
		$(function(){
			
			$('.button-reset').on('mousedown',function(e){
				$(this).css('outline', '0');
			});

			$('body').keydown(function(e){
				e.keyCode === 9 && $('.button-reset').css('outline',''); // jshint ignore:line
			});

		});
	};

})();