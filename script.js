$(document).ready(function () {
    // inicia o carrossel para a classe '.card-wrapper'
    $('.card-wrapper').slick({
        slidesToShow: 4, 
        prevArrow: '<img class="slick-prev" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next" src="/img/icons/Arrow.webp" alt="homem">',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    // inicia o carrossel para a classe '.reviews-wrapper'
    $('.reviews-wrapper').slick({
        slidesToShow: 1, 
        prevArrow: '<img class="slick-prev2" src="/img/icons/Arrow2.webp" alt="homem">',
        nextArrow: '<img class="slick-next2" src="/img/icons/Arrow.webp" alt="homem">',
    });

    
});


