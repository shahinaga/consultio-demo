$(document).ready(function() {
    $('.expert__team-slider-inner').slick({

        nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.reviews__slider-inner').slick({

        nextArrow: '<button type="button" class="slick-btn slick-r-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-btn slick-r-prev"><i class="fas fa-arrow-left"></i></button>',

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });



});