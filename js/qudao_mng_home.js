(function($){
	$(document).ready(function() {
		$('.qudao-setting').toggle(function() {
			$(this).animate({'height':'112px','line-height':'112px'}, 400)
			$(this).siblings('.qudao-extra').slideDown('400');
		}, function(event) {
			$(this).animate({'height':'67px','line-height':'67px'}, 400)
			$(this).siblings('.qudao-extra').slideUp('400');
		});
		
	})
})(jQuery);