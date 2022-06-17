const { height: headerHeight } = document.querySelector('.header1').getBoundingClientRect();

document.body.style.paddingTop = `${headerHeight}px`;
