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
console.log(new Date().getFullYear());
thisYear.textContent