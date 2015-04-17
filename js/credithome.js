(function($){
	$(document).ready(function() {
		$('.show_accout_details').bind('click', function(event) {
			event.preventDefault();
			// $('li.li_hover').removeClass('li_hover');
			$(this).parents('li').addClass('li_hover')
				.children('.accout_details_wraper')
				.slideDown();
				// .animate({height: '200px'}, '800');
		});

		$('.close>span').bind('click', function(event) {
			$(this).parents('.accout_details_wraper').slideUp()
				.parent().removeClass('li_hover');

		});
	})
})(jQuery);