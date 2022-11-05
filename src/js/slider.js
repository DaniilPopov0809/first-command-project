const sliderLine = document.querySelector('.dishes__slider'); //выбрать слайдер
const countImg = document.getElementsByClassName('dishes__img').length; //кол-во картинок

let screenSize = 0;
let offset = 0; // переменная отступа
let stepSlyder = document.querySelector('.dishes__img').clientWidth; //ширина шага слайдера
let positionSlyder = (countImg - 1) * stepSlyder; //длина слайдера без послдней картинки

let position = 0; //позиция слайдера до смены расшерения
let preStepSlyder = 0; // ширина слайдера до изменения расширения

// Next-button click handler
document
  .querySelector('.dishes__button--next')
  .addEventListener('click', function () {
    offset += stepSlyder;
    console.log('firstoffset', offset);
    if (offset > positionSlyder) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--next').blur();
  });

//  Prev-button click handler
document
  .querySelector('.dishes__button--prev')
  .addEventListener('click', function () {
    offset -= stepSlyder;
    if (offset < 0) {
      offset = positionSlyder;
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--prev').blur();
  });

//  Return default dish if resize screen

window.addEventListener('resize', function () {
  screenSize = document.documentElement.clientWidth;
  console.log('screenSize', screenSize);
  if (screenSize > 768) {
    console.log('beforResize', offset);
    preStepSlyder = stepSlyder;
    console.log('preSlyder', preStepSlyder);

    // Image size delay
    // setTimeout(function () {
    stepSlyder = document.querySelector('.dishes__img').clientWidth;

    console.log('stepSlider', stepSlyder);

    positionSlyder = (countImg - 1) * stepSlyder;
    console.log('positionSlyder', positionSlyder);
    console.log('afterResize', offset);
    position = offset / preStepSlyder;

    console.log('position', position);

    offset = stepSlyder * position;
    console.log('offset', offset);

    sliderLine.style.left = -offset + 'px';
    console.log('line', offset);
    // }, 600);
  }
});

// window.addEventListener('resize', function () {
//   // Image size delay
//   setTimeout(function () {
//     stepSlyder = document.querySelector('.dishes__img').clientWidth;
//     positionSlyder = (countImg - 1) * stepSlyder;
//   }, 600);

//   offset = 0;

//   sliderLine.style.left = 0;
// });
