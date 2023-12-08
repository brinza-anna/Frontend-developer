import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function () {


  // const burger = document?.querySelector('[data-burger]');
  // const nav = document?.querySelector('[data-menu');
  // const navItems = nav?.querySelectorAll('data-menu-item]');
  // const body = document.body;
  // const header = document?.querySelector('.header');
  // const headerHeight = header.offsetHeight;
  // console.log(headerHeight)
  // document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`); //yназвание переменной из media-1024{ .nav}

  // burger?.addEventListener('click', () => {
  //   body.classList.toggle('stop-scroll');
  //   burger?.classList.toggle('burger--active');
  //   nav?.classList.toggle('nav--visible');
  // });

  // navItems.forEach(el => {
  //   el.addEventListener('click', () => {
  //     body.classList.remove('stop-scroll');
  //     burger?.classList.remove('burger--active');
  //     nav?.classList.remove('nav--visible');
  //   });
  // });



  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const closeBtn = document?.querySelector('[data-menu-close]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  closeBtn?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });
  });
})();
