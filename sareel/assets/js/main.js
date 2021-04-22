;(function($){
    "use strict";

    // scroll down
    $(document).on('click', '.scrolldown a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    $(document).ready(function(){
        // slider 1 activation
        var slider1Active = $('.slider-img-active');
        var sliderThumbActive = $('.thumb-active');
        var sliderDotsWrapper = $('.slider-dots-wrapper');

        if (slider1Active.length) {
            slider1Active.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: sliderThumbActive,
                dots: true,
                arrows: false,
                appendDots: sliderDotsWrapper,
                focusOnSelect: true,
                speed: 700
            });
        }
        if (sliderThumbActive.length) {
            sliderThumbActive.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: slider1Active,
                dots: false,
                arrows: false,
                focusOnSelect: true,
                speed: 700,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2
                      }
                    }
                ]
            });
        }

        // slider 2 activation
        var slider2Active = $('.slider-2-active');
        var slider2ThumbActive = $('.slider-thumb-active');
        var slider2DotsWrapper = $('.slider-2-pagination-wrapper');
        var initCounttt = $('.slider-2-pagination .count');
        var totalCounttt = $('.slider-2-pagination .total');
        var totalSlideCount = $('.slider-2-item').length;        
        totalCounttt.text('0' + totalSlideCount);
        var sliderDotsWrapper = $('.slider-dots-wrapper');

        if (slider2Active.length) {
            slider2Active.on('init reInit afterChange beforeChange', function(event, slick, currentSlide, nextSlide){
                var j = (currentSlide ? currentSlide : 0) + 1;
                initCounttt.text('0'+j);
            }).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: slider2ThumbActive,
                arrows: true,
                prevArrow: '.arrow-prev',
                nextArrow: '.arrow-next',
                dots: false,
                appendDots: slider2DotsWrapper,
                focusOnSelect: true,
                speed: 700
            });
        }
        if (slider2ThumbActive.length) {
            slider2ThumbActive.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: slider2Active,
                arrows: false,
                dots: false,
                appendDots: sliderDotsWrapper,
                focusOnSelect: true,
                speed: 700
            });
        }

        // slider 1
        // if (sliderImgActive.length) {
        //     sliderImgActive
        //     .on('init reInit afterChange', function(){
        //         get_prev_next_slider_img();
        //     })
        //     .slick({
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         asNavFor: sliderContentActive,
        //         dots: true,
        //         arrows: true,
        //         prevArrow: '.thumb-prev',
        //         nextArrow: '.thumb-next',
        //         appendDots: sliderDotsWrapper,
        //         focusOnSelect: true,
        //         speed: 700
        //     });
        // }
        // if (sliderContentActive.length) {
        //     sliderContentActive
        //     .on('init reInit afterChange', function(){
        //         get_prev_next_slider_img();
        //     })
        //     .slick({
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         asNavFor: sliderImgActive,
        //         focusOnSelect: true,
        //         arrows: false,
        //         speed: 700
        //     });
        // }                
        // function get_prev_next_slider_img(){
        //     var currentImgSrc = $('.slider-lg-img.slick-current').find('img').attr('src');
        //     var prevImgSrc = $('.slider-lg-img.slick-current').prev().find('img').attr('src');
        //     var nextImgSrc = $('.slider-lg-img.slick-current').next().find('img').attr('src');
        //     currentImg.attr('src', currentImgSrc);
        //     prevImg.attr('src', prevImgSrc);
        //     nextImg.attr('src', nextImgSrc);
        // }

        // popupchat
        $('.service-select').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('open');
        });

        setTimeout(function(){
            $('.msg-box').fadeOut("slow");
        }, 5000);

        $('.msg-box .msg-box-close').on('click', function(e){
            e.preventDefault();
            $('.msg-box').fadeOut();
        });

        // fight image load
        // var tmpImg = new Image() ;
        // tmpImg.src = $('.primary-img').attr('src') ;
        // tmpImg.onload = function() {
        //     var quoteWrapper = $('.quote-wrapper');
        //     var quoteImgWidth = $('.primary-img').width();
        //     quoteWrapper.css('width', quoteImgWidth);
        // };


        // case study slider
        var caseSliderActive = $('.casestudy-slider');
        var caseArrowWrapper = $('.case-arrow-wrapper');
        var caseDotsWrapper = $('.case-slider-pagination .case-dots');
        var initCount = $('.case-slider-pagination .count');
        var totalCount = $('.case-slider-pagination .total');
        if (caseSliderActive.length) {
            caseSliderActive.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
                var i = (currentSlide ? currentSlide : 0) + 1;
                initCount.text('0'+i);
                totalCount.text('0' + slick.slideCount);
            }).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                appendDots: caseDotsWrapper,
                appendArrows: caseArrowWrapper,
                prevArrow: '<i class="icon-left-arrow prev-icon"></i>',
                nextArrow: '<i class="icon-right-arrow-3 next-icon"></i>',
                speed: 700,
                responsive: [
                    {
                      breakpoint: 1600,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 1000,
                      settings: {
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 780,
                      settings: {
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ]
            });
        }
        // testimonial active
        var testimonialActive = $('.testimonial-active');
        var testimonialDotsWrapper = $('.testimonial-dots-wrapper');
        var prevImgSelector = $('.prev-slick-img img');
        var nextImgSelector = $('.next-slick-img img');

        if (testimonialActive.length) {
            testimonialActive
            .on('init reInit afterChange', function(){
                get_prev_next_slick_img();
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                appendDots: testimonialDotsWrapper,
                speed: 700,
                prevArrow: '.prev-slick-img',
                nextArrow: '.next-slick-img'
            });
        }        
        function get_prev_next_slick_img(){
            var prevImgUrl = $('.testimonial-item.slick-current').prev().find('img').attr('src');
            var nextImgUrl = $('.testimonial-item.slick-current').next().find('img').attr('src');
            prevImgSelector.attr('src', prevImgUrl);
            nextImgSelector.attr('src', nextImgUrl);
        }
        // latest news active
        var newsActive = $('.latest-news-active');
        var newsArrowWrapper = $('.news-arrow-wrapper');

        if (newsActive.length) {
            newsActive.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                appendArrows: newsArrowWrapper,
                speed: 700,
                prevArrow: '<i class="icon-left-arrow prev-icon"></i>',
                nextArrow: '<i class="icon-right-arrow-3 next-icon"></i>',
                responsive: [
                    {
                      breakpoint: 1400,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 780,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ]
            });
        }

        // Mobile menu
        $('.first-button').on('click', function () {      
            $('.animated-icon1').toggleClass('open');
        });

        // mobile menu toggle
        if($(window).width() < 992){
            $(".menu-item-has-children > a").click(function(e) {
                e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }
        
        // copyright year
        $("#current-year").text((new Date).getFullYear());

        // countdown activation
        $('[data-countdown]').each(function() {
            var $this = $(this), 
            finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<div class="countdown-item"><div class="title"><h6 class="time">%D</h6></div><p class="text">DAYS</p></div><div class="countdown-item"><div class="title"><h6 class="time">%H</h6></div><p class="text">HOURS</p></div><div class="countdown-item"><div class="title"><h6 class="time">%M</h6></div><p class="text">MINUTES</p></div><div class="countdown-item"><div class="title"><h6 class="time">%S</h6></div><p class="text">SECONDS</p></div>'));
            });
        });

         /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn, .video-active, .video-active-2, .small-vide-play-btn').magnificPopup({
            type: 'iframe'
        });

         /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
         /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.counter-number');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

        /*-------------------------------
            Portfolio filter 
        ---------------------------------*/
        var $Container = $('.portfolio-masonry');
        if ($Container.length > 0) {
            $('.portfolio-masonry').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.masonry-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                      }
                });
                $(document).on('click', '.portfolio-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.portfolio-menu li' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }    

    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }       
    });

    
           

    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

        if( $(window).width() > 800 ){
            var stickySelector = $('.header-area');
    
            $(window).scroll(function(){
                if ($(window).scrollTop() >= 200) {
                    stickySelector.addClass("sticky")
                } else {
                    stickySelector.removeClass("sticky");
                }
            });
        }





    });
})(jQuery);