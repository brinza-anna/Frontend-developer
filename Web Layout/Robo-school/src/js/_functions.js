// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных MOBILЕ
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())


// Определение ШИРИНА экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }


// ТРРОТЛИНГ функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);


// Фикс ФУЛЛСКРИН-блоков
// import './functions/fix-fullheight';


// Реализация БУРГЕР-меню
import { burger } from './functions/burger';


// Реализация ОСТАНОВКИ СКРОЛЛА (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';


// Реализация ВЫКЛЮЧЕНИЕ СКРОЛЛА (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


// Реализация МОДАЛЬНОГО окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();


// Реализация ТАБОВ
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');


// Получение ВЫСОТА ШАПКИ сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';


// Подключение плагина КАСТОМНЫЙ-СКРОЛЛ
// import 'simplebar';


// Подключение плагина для позиционирования ТУЛЛТИПОВ
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });


// Подключение СВАЙПЕРА (СЛАЙДЕРА)
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });


// Подключение АНИМАЦИИ по скроллу
// import AOS from 'aos';
// AOS.init();


// Подключение ПАРАЛАКСА блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


// Подключение ПЛАВНОЙ ПРОКРУТКИ к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// Подключение СОБЫТИЙ СВАЙПА на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });


// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
