$(window).on('load', function () {
    $('.js-slider-cat').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});