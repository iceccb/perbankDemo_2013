(function($){
	$(document).ready(function() {
		$('#img-slides').slidesjs({
		        width: 600,
		        height: 208,
		        play: {
		          active: false,
		          auto: true,
		          interval: 4000,
		          swap: true,
		          pauseOnHover: true
		        },
		        navigation: {
		          active: true
		          
		        },
		        pagination: {
		          effect: "slide",
		          active: false
		        }
	      	});
	})
})(jQuery);