// открыть\закрыть бургер-меню
let burger = document.querySelector('.btn-burger');
let menu = document.querySelector('.header__menu');
let menuLink = document.querySelectorAll('.menu__link');
let body = document.body;

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
    burger.classList.remove('btn-burger-active');
    burger.setAttribute("aria-label", 'Открыть меню');
    menu.classList.remove('header__menu-active');
    body.classList.remove('stop-scroll');
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__burger')) {
    burger.classList.remove('btn-burger-active');
    burger.setAttribute("aria-label", 'Открыть меню');
    burger.setAttribute("aria-expanded", false);
    menu.classList.remove('header__menu-active');
    body.classList.remove('stop-scroll');
  }

});

// открыть\закрыть, отправить форму поиска
let btnOpen = document.querySelector('.btn-search__open');
let formSearch = document.querySelector('.form__search');
let input = document.querySelector('.form__input-search');
let btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', function() {
  formSearch.classList.add('form__search-active');
  btnOpen.setAttribute("aria-expanded", true);
});

btnClose.addEventListener('click', function() {
  formSearch.classList.remove('form__search-active');
  btnOpen.setAttribute("aria-expanded", false);
  input.value = '';
});

document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__search-bar')) {
    formSearch.classList.remove('form__search-active');
    btnOpen.setAttribute("aria-expanded", false);
    input.value = '';
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

// jQuery-accordion
$(function () {
  $(".faq__list").accordion({
      collapsible: true,
      // active: false,
      heightStyle: "content",
      animate: 300,
      icons: false,
  });

});

