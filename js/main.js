$(window).on('load', function () {
    var $preloader = $('#page-preloader');

    $preloader.fadeOut();
});


$("document").ready(function(){

    /*$('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.main-slider').slick({
        autoplay:true,
        infinite:false
    });*/

    if(window.innerWidth > 800) {
        $('#fullpage').fullpage({
            scrollingSpeed: 700,
            responsiveWidth:800,
            easingcss3: 'ease-in',
            scrollBar: true,
            scrollOverflow: false,
            parallax: false,
            parallaxKey: '',
            parallaxOptions: {
                type: 'reveal',
                percentage: 100
            },
            fitToSection:false,
            lockAnchors: false,
            anchors:['education','competence','experience','advantages','characteristic','certificates','principles','worktype'],
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: false,
            slidesNavigation: false,
            controlArrows: false,
            slidesNavPosition: 'bottom',
            verticalCentered: false,
            onLeave: function(index, nextIndex, direction){
                if(direction === 'up'){
                    if(nextIndex === 1) {
                        $('.page-title').removeClass('animated');
                    }
                }
                if(window.location.hash === '#competence' || window.location.hash === '#experience' || window.location.hash === '#advantages' || window.location.hash === '#certificates' || window.location.hash === '#worktype') {
                
                    $('.out-fp-content, #fp-nav').removeClass('white');
                }

            },
            afterLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                if (anchorLink == 'education') {
                    $('.out-fp-content, #fp-nav').addClass('animated');
                } else {
                    $('.out-fp-content, #fp-nav').addClass('fast-animated');
                }

                $('.fp-section.fp-completely').addClass('animated');



                if (anchorLink == 'competence') {
                    $('.out-fp-content, #fp-nav').addClass('white');

                }
            
                if (anchorLink === 'experience') {
                    $('.out-fp-content, #fp-nav').addClass('white');

                }
                if (anchorLink == 'advantages') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                
                }
                /*if (anchorLink == 'characteristic') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                
                }*/
                if (anchorLink == 'certificates') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                
                }
                if (anchorLink == 'principles') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                
                }
                
                if (anchorLink == 'worktype') {
                    $('.out-fp-content, #fp-nav').addClass('white');


                    $('.scroll-arrow').hide();
                } else {
                    $('.scroll-arrow').show();
                }
            }
        });

        $('.scroll-arrow').click(function () {
            $.fn.fullpage.moveSectionDown();
        });
    } else {
        $(window).on('resize scroll', function() {
            var hamburger_h = $('.hamburger').height();
            var hamburger_t = $('.hamburger').offset().top + hamburger_h;
            var white_h_1 = $('#main-difference').height();
            var white_t_1 = $('#main-difference').offset().top;
            if(hamburger_t > white_t_1) {
                $('.out-fp-content').addClass('white');
            }
            if(hamburger_t > (white_t_1 + white_h_1) || hamburger_t <= white_t_1){
                $('.out-fp-content').removeClass('white');
            }
        });
    }




    $('#nav-menu').iptOffCanvas({
        baseClass: 'offcanvas',
        closeOnClickOutside: false,
        single: true,
        static: false,
        staticCloseCondition: function() { return true; },
        type: 'left'
    });

    $('#nav-menu').on('opened.nav-menu@iptOffCanvas', function() {
        $('.hamburger').addClass('is-active');
    });

    $('#nav-menu').on('closed.nav-menu@iptOffCanvas', function() {
        $('.hamburger').removeClass('is-active');
    });

    $('.hamburger').click(function () {
        $('#nav-menu').data('plugin_iptOffCanvas').toggle();
    });


});