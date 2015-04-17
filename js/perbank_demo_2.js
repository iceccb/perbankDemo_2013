(function($){
	$(document).ready(function() {
		$('#topmenu').dcMegaMenu({
			rowItems: '6',
			speed: 'fast',
			effect: 'slide'
		});

		$('#content_iframe').load(function() {
			$(this).height($(this)[0].contentDocument.body.offsetHeight + 10);
			$(this).height($(this)[0].contentWindow.document.body.offsetHeight + 10);
		});
	})	
})(jQuery);


