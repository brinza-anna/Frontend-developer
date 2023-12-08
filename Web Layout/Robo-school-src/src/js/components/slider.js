import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: '1',
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },

  breakpoints: {
    577: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  },
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
    disabledClass: "nav-btn--disabled",

  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

});

