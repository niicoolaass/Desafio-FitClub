// script.js
$(document).ready(function () {
    $('.reviews-wrapper').slick({
        slidesToShow: 1,      // Mostra um review por vez
        slidesToScroll: 1,    // Avança um review por vez
        autoplay: true,       // Ativa o autoplay
        autoplaySpeed: 3000,  // Tempo entre os slides (em milissegundos)
        dots: false,           // Exibe os indicadores de página
        arrows: true,         // Oculta as setas de navegação
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>',
    });
});

$(document).ready(function () {
    $('.card-wrapper').slick({
        slidesToShow: 4,      // Mostra um review por vez
        slidesToScroll: 1,    // Avança um review por vez
        autoplay: true,       // Ativa o autoplay
        autoplaySpeed: 3000,  // Tempo entre os slides (em milissegundos)
        dots: false,           // Exibe os indicadores de página
        arrows: true,         // Oculta as setas de navegação
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>',
    });
});