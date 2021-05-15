$('.instagram__slider').slick({
    slidesToShow: 4,
    appendArrows: $('.instagram__arrows'),
    prevArrow: '<div class="arrow arrow--prev"><i class="icon-arrow"></i></div>',
    nextArrow: '<div class="arrow arrow--next"><i class="icon-arrow"></i></div>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})