document.addEventListener('DOMContentLoaded', function(){
// открыть\закрыть бургер-меню
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
let menuLink = document.querySelectorAll('.menu__link');
let body = document.body;

let closeMenu = function() {
  burger.classList.remove('btn-burger-active');
  burger.setAttribute("aria-label", 'Открыть меню');
  menu.classList.remove('header__menu-active');
  body.classList.remove('stop-scroll');
}

burger.addEventListener('click', function() {
  burger.classList.toggle('btn-burger-active');
  menu.classList.toggle('header__menu-active');
  body.classList.toggle('stop-scroll');
  if (burger.getAttribute('aria-label') === 'Открыть меню') {
    burger.setAttribute("aria-label", 'Закрыть меню');
    burger.setAttribute("aria-expanded", true);
  } else {
    burger.setAttribute("aria-label", 'Открыть меню');
    burger.setAttribute("aria-expanded", false);
  }
});
menuLink.forEach(function(e) {
  e.addEventListener('click', function() {
    closeMenu();
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('[data-burger]')) {
    closeMenu();
  }
});

// открыть\закрыть, отправить форму поиска
const btnOpen = document.querySelector('[data-state-searchbar="open"]');
const formSearch = document.querySelector('.form-searchbar');
const input = document.querySelector('.form-searchbar__input');
const btnClose = document.querySelector('[data-state-searchbar="close"]');

let openSearchbar = function() {
  formSearch.setAttribute('data-visible', '');
  formSearch.setAttribute('aria-expanded', true);
}

let closeSearchbar = function() {
  formSearch.removeAttribute('data-visible');
  formSearch.setAttribute('aria-expanded', false);
  input.value = '';
}
btnOpen.addEventListener('click', function() {
  openSearchbar();
});

btnClose.addEventListener('click', function() {
  closeSearchbar();
});

document.addEventListener('click',
function(el) {
  if(!el.target.closest('.header__searchbar')) {
    closeSearchbar();
  }
});

// иницилизация slider-swiper
const swiper = new Swiper('.slider__swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },

});

// tabs
let tabsBtn = document.querySelectorAll('.how-nav__btn');
let tabsItem = document.querySelectorAll('.how-content__item');

tabsBtn.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('how-nav__btn--active');
      btn.setAttribute("aria-expanded", false);
      e.currentTarget.classList.add('how-nav__btn--active');
      e.currentTarget.setAttribute("aria-expanded", true);
    });

    tabsItem.forEach(function(item) {
      item.classList.remove('how-content__item--active');
      document.querySelector(`[data-target="${path}"]`).classList.add('how-content__item--active');
    });
  });
});
// иницилизация accordion
const accordions = Array.from(document.querySelectorAll('.accordion'));
new Accordion(accordions, {
  duration: 400,
  collapse: true,
  elementClass: 'faq__item',
  triggerClass: 'faq__question',
  panelClass: 'faq__answer',
  openOnInit: [0],
});
// jQuery-accordion
// $(function () {
//   $(".faq__list").accordion({
//       collapsible: true,
//       // active: false,
//       heightStyle: "content",
//       animate: 300,
//       icons: false,
//   });

// });
});
