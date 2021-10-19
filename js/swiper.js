new Swiper('.main-new .swiper.pc ', {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  pagination: {
    el: '.main-new .swiper-pagination',
    clickable: true,
    type: 'fraction'
  }
});