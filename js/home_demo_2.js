(function($){
	$(document).ready(function() {
		var services_slides_width = $('#new-services-slides').width(),
				promotions_slides_width = $('#promotions-slides').width();
			$('#new-services-slides').slidesjs({
		        width: services_slides_width,
		        height: 183,
		        play: {
		          active: false,
		          auto: true,
		          interval: 4000,
		          swap: true,
		          pauseOnHover: true
		        },
		        navigation: {
		          active: false
		        },
		        pagination: {
		          effect: "slide",
		          active: true
		        },
	      	});
	      	$('#promotions-slides').slidesjs({
		        width: promotions_slides_width,
		        height: 183,
		        play: {
		          active: false,
		          auto: true,
		          interval: 4000,
		          swap: true,
		          pauseOnHover: true,
		          effect: 'fade'
		        },
		        navigation: {
		          active: false
		        },
		        pagination: {
		          effect: "fade",
		          active: true
		        },
	      	});

	})
})(jQuery);