(function ($) {
    "use strict";

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150) {
            $('.main-navbar').addClass('menu-shrink');
        } else {
            $('.main-navbar').removeClass('menu-shrink');
        }
    });			

    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 50);
        e.preventDefault();
    });

    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });				
    // END MENU JS	
  
    // hero-slider
    $(".hero-slider").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="lni lni-angle-double-left"></i>', '<i class="lni lni-angle-double-right"></i>']
    });

    //odometer js
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    
    // AOS JS
    AOS.init();
 
    // Back to top button
    var btn = $('#backToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    
    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });
    // END PRELOADER
 
  
})(jQuery);
  



 
    
 
