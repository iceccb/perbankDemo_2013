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

		// $('.bg_image').height(window.innerHeight);
		// console.log(window.innerHeight)

		$('.go-button').bind('click',function(event) {
			// event.stopPropagation();
			// console.log('go');
			// return false;
		});
		$('.overlay-dialog-wrapper').bind('click', function(event) {
			$(this).css('display', 'none');
		});

		$('.sidebar span').not('nonsub').toggle(function() {
				$(this).next('.sub_sidebar').slideDown('800');
				$(this).text($(this).text().replace('+', '-'));
			}, function() {
				$(this).next('.sub_sidebar').slideUp('800');
				$(this).text($(this).text().replace('-', '+'));
			});

		$('.quickMenu .setting').data('setFlag', false)
			.bind('click', function(event) {
				var $setting = $(this),
				    $quickIcon = $(".quickMenu .shoucangjia-list"),
				    $span = $quickIcon.find('.shoucangjia-icon').not('.add'),
				    setFlag = $setting.data('setFlag');
				if(!setFlag) {
					$span.each(function(index, el) {
						var _this = $(this);
						$('<span class="batch delete">&#xf14d;</span>').appendTo(_this)
							.bind('click', function(event) {
								$(this).parents('li', $quickIcon).empty()
									.css('display', 'none');
								event.preventDefault();
							});
					});
					$setting.data('setFlag', true);
				}
				else {
					$span.empty();
					$setting.data('setFlag', false);
				}
				event.preventDefault();
			});

		$('#changeSkin').bind('click', function(event) {
				$('.topOverlay').data('fixedFlag', true);
				$('.topOverlay>.sub').slideDown('800');
			});

			$('.topOverlay>.sub img').bind('click', function(event) {
				var imgSrc = 'url("' + $(this).attr('src').replace('.jpg','_f.jpg') + '")';
				$('.bg_image').css('background-image', imgSrc);
			});

			$('#overlay_close').bind('click', function(event) {
				$('.topOverlay').data('fixedFlag', false);
				$('.topOverlay>.sub').slideUp('800');
			});

		$('.topOverlay').data('fixedFlag', false);
		setTimeout(function(){
				$('.top').slideUp('800');
			}, 1000);
			
			$('.topOverlay').on('mouseenter', function(event) {
				$('.top').stop().slideDown('800');
			});

			$('.topOverlay').on('mouseleave', function(event) {
				if(!$('.topOverlay').data('fixedFlag')) {
					$('.top').stop().slideUp('800');
				}	
			});

		$('.quickMenu > .next').bind('click', function(event) {
			event.preventDefault();
			$('.quickMenu .shoucangjia-list').animate({top:'-360px'}, 1000);
			$(this).css('visibility', 'hidden');
			$('.quickMenu > .prev').css('visibility', 'visible');
		});

		$('.quickMenu > .prev').bind('click', function(event) {
			event.preventDefault();
			$('.quickMenu .shoucangjia-list').animate({top:'0px'}, 1000);
			$(this).css('visibility', 'hidden');
			$('.quickMenu > .next').css('visibility', 'visible');
		});

		$('#search-input').bind('focus', function(event) {
			$('.topOverlay').data('fixedFlag', true);
		});

		$('#search-input').bind('blur', function(event) {
			$('.topOverlay').data('fixedFlag', false);
			$('.top').slideUp('800');
		});
		
		$('.quickMenu .hide').bind('click', function(event) {
			event.preventDefault();
			$('.quickMenu').hide('1000', function(){
				$('.show_quickMenu ').show('100');
			});
			$('.main-content').animate({marginLeft:'0px'}, '1000')
			
		});

		$('.show_quickMenu .show').bind('click', function(event) {
			event.preventDefault();
			$('.show_quickMenu').hide('100');
			$('.quickMenu ').show('100');
			$('.main-content').animate({marginLeft:'85px'}, '1000')
			
		});
	})
})(jQuery);