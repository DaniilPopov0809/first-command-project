let headerHeigth = document.querySelector('.header').clientHeight;
document.documentElement.style.setProperty(
  '--body-padding-top',
  `${headerHeigth}px`
);
