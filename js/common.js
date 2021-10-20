'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

var header = document.querySelector('#header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// 모바일메뉴
const menuBtn = header.querySelector('.menu-btn');
const closeBtn = header.querySelector('.close-btn');
const gnb = header.querySelector('#gnb');
const gnbLists = header.querySelectorAll('#gnb > ul > li');
const gnbAnchers = header.querySelectorAll('#gnb > ul > li > a');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.add('invisible');
  closeBtn.classList.remove('invisible');
  gnb.classList.add('open');
});

closeBtn.addEventListener('click', function () {
  menuBtn.classList.remove('invisible');
  closeBtn.classList.add('invisible');
  gnb.classList.remove('open');
  gnbLists.forEach(function (gnbList) {
    gnbList.classList.remove('active');
  });
});

gnbAnchers.forEach(function (gnbAncher) {
  gnbAncher.addEventListener('click', function (event) {
    gnbLists.forEach(function (gnbList) {
      gnbList.classList.remove('active');
    });
    event.target.parentElement.classList.toggle('active');
  });
});

// 올해년도 구하기
var thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// footer info toggle
var footerInfo = document.querySelector('#footer .info');
var footerToggleBtn = footerInfo.querySelector('a');
footerToggleBtn.addEventListener('click', function () {
  footerInfo.classList.toggle('open');
});

var footer = document.querySelector('#footer');
var footerHeight = footer.getBoundingClientRect().height;
var toTopBtn = document.querySelector('#to-top');
var wrapper = document.querySelector('#wrapper');

window.addEventListener('scroll', _.throttle(function () {
  if (window.pageYOffset > 500) {
    gsap.to(toTopBtn, .2, {
      x: 0
    });
  } else {
    gsap.to(toTopBtn, .2, {
      x: 100
    })
  }
}, 300));

toTopBtn.addEventListener('click', function () {
  wrapper.scrollIntoView({behavior:"smooth"});
});

var imgEl = toTopBtn.querySelector('img.punch');
var imgUrl = ['punch1.svg', 'punch2.svg', 'punch3.svg', 'punch4.svg'];
var chosenImgUrl = imgUrl[Math.floor(Math.random() * imgUrl.length)];

imgEl.setAttribute('src', `../img/${chosenImgUrl}`);

