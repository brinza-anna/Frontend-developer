// import { createPopper, right } from '@popperjs/core';
import tippy from 'tippy.js';

// const el = document.querySelector('.tooltip__btn');
// const tooltip = document.querySelector('.tooltip__txt');

// createPopper(el, tooltip, {
//   position: 'top',
//   placement: 'top-start'
// });



tippy('.js-tooltip-btn', {
  placement: 'top',
  theme: 'about-tooltips',
  maxWidth: 250,
  // offset: [20, 20],
  // arrow: true,
});



