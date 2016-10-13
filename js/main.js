(function(){
	
	require('../node_modules/angular/angular.min');
	require('../node_modules/angular-sanitize/angular-sanitize.min');
	require('../node_modules/angular-route/angular-route.min');
	require('../app/app');
	require('../app/routes');
	require('../app/components/gallery/galleryDirective');
	require('../app/components/reviews/reviewsController');
	require('../app/components/reviews/reviewsDirective');
	require('../app/services/item');


	// DOM manipulation to remove focus outline on mouse click for button events, and re-add outline when keyboard tab is pressed for accessibility
	window.onload = function(){

		// DOM manipulation to remove focus outline on mouse click for button events.
		$('.button-reset').on('mousedown',function(e){
			console.log('mousedown');
			$(this).css('outline', '0');
		});

		// re-add outline when keyboard Tab is pressed for accessibility
		$('body').keydown(function(e){
			e.keyCode === 9 && $('.button-reset').css('outline',''); // jshint ignore:line
		});
		
	};

})();