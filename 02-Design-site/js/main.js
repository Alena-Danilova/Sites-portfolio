
    $('.slider-feedback').owlCarousel({
        center: true,
        margin:30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        loop: true,
        dots: true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            }
        }
    });
 

    $(function() {
    var owl = $('.what-can-slider'),
        owlOptions = {
          loop: true,
          margin:30,
          autoplay: true,
          dots: false,
          autoplayTimeout: 3000,
          autoplayHoverPause:true,
          responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                }
            }
        };

    if ( $(window).width() < 1000 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 1000 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

    $(function() {
    var owl = $('.competencies-slider'),
        owlOptions = {
          loop: true,
          margin:30,
          autoplay: true,
          dots: false,
          autoplayTimeout: 5000,
          autoplayHoverPause:true,
          responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                }
            }
        };
 
    if ( $(window).width() < 1000 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 1000 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});