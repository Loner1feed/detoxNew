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
});

$('.header__toggler').click(function() {
    $('.header__nav').toggleClass('header__nav--open');
    $('.header__toggler').toggleClass('header__toggler--open');
    $('.content').toggleClass('content--open');
})


$(".header__nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});