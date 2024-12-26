document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.residence-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3, // Mostrar 3 tarjetas en pantallas medianas y grandes
        },
      },
    });

    new Swiper('#isoCarousel', {
      loop: true,
      slidesPerView: 1, // Mostrar solo 1 imagen a la vez
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '#isoCarousel .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#isoCarousel .swiper-button-next',
        prevEl: '#isoCarousel .swiper-button-prev',
      },
    });   
    
    new Swiper('#serviciosCarousel', {
      loop: true,
      slidesPerView: 1, // Mostrar solo 1 imagen a la vez
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '#serviciosCarousel .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#serviciosCarousel .swiper-button-next',
        prevEl: '#serviciosCarousel .swiper-button-prev',
      },
    });

 });