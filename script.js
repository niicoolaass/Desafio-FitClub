$(document).ready(function () {
    // inicia o carrossel para a classe '.card-wrapper'
    $('.card-wrapper').slick({
        slidesToShow: 4, 
        prevArrow: '<img class="slick-prev" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next" src="/img/icons/Arrow.webp" alt="homem">',
    });

    // inicia o carrossel para a classe '.reviews-wrapper'
    $('.reviews-wrapper').slick({
        slidesToShow: 1, 
        prevArrow: '<img class="slick-prev2" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next2" src="/img/icons/Arrow.webp" alt="homem">',
    });
});
