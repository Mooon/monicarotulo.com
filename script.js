/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('.main_nav').addClass('sticky');
        $('.mobile-toggle').addClass('open-toggle');
    } else {
        $('.main_nav').removeClass('sticky');
        if ($('.main_nav').hasClass('open-nav')){

        }else{
            $('.mobile-toggle').removeClass('open-toggle');
        }
        
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        if ($('.main_nav').hasClass('sticky')){
            
        } else {
            $('.mobile-toggle').removeClass('open-toggle');
        } 
        $('.main_nav').removeClass('open-nav'); 
    } else {
        $('.main_nav').addClass('open-nav');
        $('.mobile-toggle').addClass('open-toggle');
    }
});

// $('.mobile-toggle').click(function() {
//     if ($('.mobile-toggle').hasClass('open-toggle')) {
//          $('.mobile-toggle').removeClass('open-toggle');
//     } else {
//         $('.mobile-toggle').addClass('open-toggle');
//     }
// });

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);