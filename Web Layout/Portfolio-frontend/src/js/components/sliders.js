import Swiper from 'swiper/bundle';

const heroSlider = new Swiper('.hero__slider', {
  slidesPerView: '1',
  spaceBetween: 20,
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 5000,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const projectsSlider = new Swiper(".js-projects-slides", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  // spaceBetween: 20,
  pagination: {
    el: ".js-projects-pagination",
    // type: "fraction"
  },
  navigation: {
    nextEl: ".js-projects-next",
    prevEl: ".js-projects-prev",
    disabledClass: "nav-btn--disabled"
  },

  breakpoints: {
    // 611: {
    //   slidesPerView: 2,
    //   // spaceBetween: 30
    // },

    611: {
      slidesPerView: 3,
      // spaceBetween: 30,
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }
});

