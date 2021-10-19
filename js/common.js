'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

const header = document.querySelector('#header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// 올해년도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// footer info toggle
const footerInfo = document.querySelector('#footer .info');
const footerToggleBtn = footerInfo.querySelector('a');
footerToggleBtn.addEventListener('click', function () {
  footerInfo.classList.toggle('open');
});