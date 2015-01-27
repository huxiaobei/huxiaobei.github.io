$(function(){
jQuery.extend( jQuery.easing,
{
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	}
})

	$(window).scroll(function(){
		var t = $(window).scrollTop();
		if(t>$('.header-wrap').height()){
			$('#navigation').addClass('fixed');
		}else{
			$('#navigation').removeClass('fixed');
		}
		if(t>0){
			$('#back-top').addClass('show');
		}else{
			$('#back-top').removeClass('show');
		}
	});
	
	if(document.querySelector('.content-title')){
		$('#content').css({'maxWidth':940,'margin':'0 auto'});
	}
	
	$('#back-top').click(function(){
		$('body,html').animate({scrollTop:0},600,'easeInOutQuart');
	});

	
//end
});