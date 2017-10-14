$(window).on('load', function () {
    var $preloader = $('#page-preloader');

    $preloader.fadeOut();
});


$("document").ready(function(){

    $('a.m-scroll-arrow').smoothScroll();

    $('.scrollbar-outer').scrollbar();

    if(window.innerWidth > 800) {
        $('#fullpage').fullpage({
            scrollingSpeed: 700,
            responsiveWidth:800,
            easingcss3: 'ease-in',
            scrollBar: false,
            scrollOverflow: false,
            parallax: true,
            parallaxKey: '',
            parallaxOptions: {
                type: 'reveal',
                percentage: 100
            },
            fitToSection:false,
            lockAnchors: false,
            anchors:['education','competence','experience','advantages','characteristic','certificates','principles', 'worktype'],
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
                if(window.location.hash === '#competence' || window.location.hash === '#advantages' || window.location.hash === '#advantages'  || window.location.hash === '#certificates' || window.location.hash === '#principles' || window.location.hash === '#worktype') {
                    
                    $('.out-fp-content, #fp-nav').removeClass('white');
                    $('.search-box').removeClass('colorChng');
                }
               

            },
            afterLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                if (anchorLink == 'education') {
                    $('.out-fp-content, #fp-nav, .search-box').addClass('animated');
                    $('.search-box').addClass('colorChng');
                } else {
                    $('.out-fp-content, #fp-nav, .search-box').addClass('fast-animated');
                }

                $('.fp-section.fp-completely').addClass('animated');


                if (anchorLink == 'competence') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                    $('.search-box').removeClass('colorChng');
                    
                }
                if (anchorLink == 'experience') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                    $('.search-box').removeClass('colorChng');
                }
                if (anchorLink == 'advantages') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                   $('.search-box').removeClass('colorChng');

                }
                if (anchorLink === 'characteristic') {
                    $('.search-box').addClass('colorChng');
                    
                }
                if (anchorLink == 'certificates') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                    $('.search-box').removeClass('colorChng');
                    
                }
                if (anchorLink == 'principles') {
                    $('.out-fp-content, #fp-nav').addClass('white');
                    $('.search-box').removeClass('colorChng');
                    
                }
                if (anchorLink == 'worktype') {
                    $('.search-box').removeClass('colorChng');
                    $('.out-fp-content, #fp-nav').addClass('white');

                    

                    $('.scroll-arrow').hide();
                } else {
                    $('.scroll-arrow').show();
                }
                if(anchorLink !== 'welcome'){
                    $('.page-title').addClass('animated');
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

            var white_h_1 = $('#about-competence').height();
            var white_t_1 = $('#about-competence').offset().top;

            var white_h_2 = $('#about-experience').height();
            var white_t_2 = $('#about-experience').offset().top;

            var white_h_3 = $('#about-advantages').height();
            var white_t_3 = $('#about-advantages').offset().top;

            var white_h_4 = $('#about-certificates').height();
            var white_t_4 = $('#about-certificates').offset().top;

            var white_h_5 = $('#about-principles').height();
            var white_t_5 = $('#about-principles').offset().top;

            var white_h_6 = $('#about-worktype').height();
            var white_t_6 = $('#about-worktype').offset().top;

            if(
                (hamburger_t >= white_t_1 && hamburger_t < (white_t_1+white_h_1)) ||
                (hamburger_t >= white_t_2 && hamburger_t < (white_t_2+white_h_2)) ||
                (hamburger_t >= white_t_3 && hamburger_t < (white_t_3+white_h_3)) ||
                (hamburger_t >= white_t_4 && hamburger_t < (white_t_4+white_h_4)) ||
                (hamburger_t >= white_t_5 && hamburger_t < (white_t_5+white_h_5)) ||
                (hamburger_t >= white_t_6 && hamburger_t < (white_t_6+white_h_6))) {
                $('.out-fp-content').addClass('white');
                $('.search-box').removeClass('colorChng');
            }

             else {
                $('.out-fp-content').removeClass('white');
                $('.search-box').addClass('colorChng');
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