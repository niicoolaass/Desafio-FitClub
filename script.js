$(document).ready(function () {
    $('.card-wrapper').slick({
        slidesToShow: 4,      // Mostra um review por vez
        slidesToScroll: 1,    // Avança um review por vez
        autoplaySpeed: 3000,  // Tempo entre os slides (em milissegundos)
        dots: false,           // Exibe os indicadores de página
        arrows: true,         // Oculta as setas de navegação
        prevArrow: '<img class="slick-prev" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next" src="/img/icons/Arrow.webp" alt="homem">',

    });
});

$(document).ready(function () {
    $('.reviews-wrapper').slick({
        slidesToShow: 1,      // Mostra um review por vez
        slidesToScroll: 1,    // Avança um review por vez
        autoplaySpeed: 3000,  // Tempo entre os slides (em milissegundos)
        dots: false,           // Exibe os indicadores de página
        arrows: true,         // Oculta as setas de navegação
        prevArrow: '<img class="slick-prev2" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next2" src="/img/icons/Arrow.webp" alt="homem">',
    });
});
