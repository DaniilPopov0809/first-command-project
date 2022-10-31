// Mobile burger menu

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const bodyScrollLock = document.querySelector('body');
  function toggleMenu() {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    bodyScrollLock.classList.toggle('no-scroll');
  }
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.classList.remove('no-scroll');
  });
})();

// Hero slyder

let offset = 0;
let stepSlyderTablet = 306;
let positionSlyderTablet = 612;
let stepSlyderDesktop = 554;
let positionSlyderDesktop = 1108;
const sliderLine = document.querySelector('.dishes__slyder');
let screenSize = document.documentElement.clientWidth;

// Next-button click handler
document
  .querySelector('.dishes__button--next')
  .addEventListener('click', function () {
    let screenSize = document.documentElement.clientWidth;
    if (screenSize < 1280) {
      offset = offset + stepSlyderTablet;
      if (offset > positionSlyderTablet) {
        offset = 0;
      }
    }
    if (screenSize > 1280) {
      offset = offset + stepSlyderDesktop;
      if (offset > positionSlyderDesktop) {
        offset = 0;
      }
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--next').blur();
  });

// Prev-button click handler
document
  .querySelector('.dishes__button--prev')
  .addEventListener('click', function () {
    screenSize = document.documentElement.clientWidth;
    if (screenSize < 1280) {
      offset = offset - stepSlyderTablet;
      if (offset < 0) {
        offset = positionSlyderTablet;
      }
    }
    if (screenSize > 1280) {
      offset = offset - stepSlyderDesktop;
      if (offset < 0) {
        offset = positionSlyderDesktop;
      }
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--prev').blur();
    
  });

//  Return default dish if resize screen
window.addEventListener('resize', function () {
  sliderLine.style.left = 0;
});

// document
//   .querySelector('.dishes__button--next')
//   .addEventListener('touchend', function () {
//     // alert('Hello');
//     document.activeElement.blur();
//   });

// document
//   .querySelector('.dishes__button--next')
//   .addEventListener('touchend', e => e.preventDefault());

// const isMouseDown = false; // в примере будет работать только для 1ой кнопки
// const button = document.querySelector('.dishes__button--next');
// button.addEventListener('touchend', () => (isMouseDown = true));
// button.addEventListener('touchstart', () => (isMouseDown = false));
// button.addEventListener('focus', () => {
//   if (isMouseDown) {
//     button.blur();
//   }
// });


