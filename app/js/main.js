$(document).ready(function() {
	// scroll menu fixed
	window.onscroll = function(){
		var	scrolled = window.pageYOffset || document.documentElement.scrollTop,
			header = document.querySelector('.main__header');
		if (scrolled > 1 && $(window).width() > 768){
			$(header).addClass('main__header--scrolled');
		}
		else if(scrolled <= 1 && $(window).width() > 768) {
			$(header).removeClass('main__header--scrolled');
		}
	}
	// ---------------------------- //
	// scroll to
	$('.main .main_btn').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});
	// ---------------------------- //
	// popup
	$('.popup').click(function(e){
		e.preventDefault();
		var popup = $(this).siblings('.popup_window');
		$(popup).addClass('opened');
		
		if($(popup).is(':visible')){
			$('.popup_bg').css({
				'opacity' : '1',
				'zIndex' : '221'
			});
		}
	});
	$('.btn_close').click(function(){
		var close = $(this).parent();
		$(close).removeClass('opened');
		$('.popup_bg').css({
			'opacity' : '0',
			'zIndex' : '-1'
		});
	});
	$('.popup_bg').click(function(){
		$(this).css({
			'opacity' : '0',
			'zIndex' : '-1'
		});
		$('.popup_window').removeClass('opened');
	});
	// ---------------------------- //
	// select gift
	$('.tab_btn').click(function(){
		$('.tab_btn').removeClass('main_btn');
		$(this).addClass('main_btn');
		if($(this).hasClass('tab_btn2')){
			$('.select__gift__pict').attr('src', 'img/2.png');
		}
		else if($(this).hasClass('tab_btn3')){
			$('.select__gift__pict').attr('src', 'img/3.png');
		}
		else{
			$('.select__gift__pict').attr('src', 'img/1.png');
		}
	});
	// ---------------------------- //
	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.prev',
		nextArrow: '.next',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	// ---------------------------- //
	// onclick placeholder remove
	$('input, textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
	// ---------------------------- //
	// counter items
	$('.add').click(function(e){
		var quantity = $('.quantity').text();
		console.log(+quantity++);
		$('.quantity').text((quantity++));
	});
	$('.deduct').click(function(){
		var quantity = $('.quantity').text();
		console.log(+quantity--);
		$('.quantity').text(+quantity--);
	});
	// ---------------------------- //
	// checkbox
	$('.checkbox').click(function(){
		if ($('.checkbox input').prop('checked')){
			$(this).find('.circle').css('background-color', '#405069');
		}
		else {
			$(this).find('.circle').css('background-color', 'transparent');
		}
	});
	// ---------------------------- //
	// credit card
	$('.pay__item').click(function(){
		$('.pay__item').removeClass('active');
		$(this).addClass('active');
	});
});