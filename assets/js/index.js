
const mainswiper = new Swiper('.hero_section .swiper', {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.hero_section .swiper-button-next',
      prevEl: '.hero_section .swiper-button-prev',
    },
    // breakpoints: {
    //   0: { slidesPerView: 1 },
    //   1000: { slidesPerView: 3 }
    // }
  });
  
  