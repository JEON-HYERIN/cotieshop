'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var header = document.querySelector('#header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// gnb영역
$('#gnb > ul > li > a').on('mouseenter focusin', function () {
  var index = $('#gnb > ul > li').index($(this).parent());
  $('#gnb > ul > li').removeClass('on');
  $('#gnb > ul > li:eq(' + index + ')').addClass('on');
});

$('#header').on('mouseleave', function () {
  $('#gnb > ul > li').removeClass('on');
});

// 모바일메뉴
// var menuBtn = header.querySelector('.menu-btn');
// var closeBtn = header.querySelector('.close-btn');
// var gnb = header.querySelector('#gnb');
// var gnbLists = header.querySelectorAll('#gnb > ul > li');
// var gnbAnchers = header.querySelectorAll('#gnb > ul > li > a');
// menuBtn.addEventListener('click', function () {
//   menuBtn.classList.add('invisible');
//   closeBtn.classList.remove('invisible');
//   gnb.classList.add('open');
// });

// closeBtn.addEventListener('click', function () {
//   menuBtn.classList.remove('invisible');
//   closeBtn.classList.add('invisible');
//   gnb.classList.remove('open');
//   gnbLists.forEach(function (gnbList) {
//     gnbList.classList.remove('active');
//   });
// });

// gnbAnchers.forEach(function (gnbAncher) {
//   gnbAncher.addEventListener('click', function (event) {
//     gnbLists.forEach(function (gnbList) {
//       gnbList.classList.remove('active');
//     });
//     event.target.parentElement.classList.toggle('active');
//   });
// });

$('#header .menu-btn').on('click', function () {
  $(this).addClass('invisible');
  $('#header .close-btn').removeClass('invisible');
  $('#gnb').toggleClass('open');
  $('#gnb > ul > li.active > a').trigger('click');
});
$('#header .close-btn').on('click', function () {
  $(this).addClass('invisible');
  $('#header .menu-btn').removeClass('invisible');
  $('#gnb').toggleClass('open');
  $('#gnb > ul > li.selected > a').trigger('click');
});

$('#gnb > ul > li > a').on('click', function (event) {
  if ($(window).width() < 1024) {
    if ($(this).parent().find('ul').length > 0) {
      event.preventDefault();
    }
    var index = $('#gnb > ul > li').index($(this).parent());
    $('#gnb > ul > li').removeClass('selected');
    $('#gnb > ul > li:eq(' + index + ')').addClass('selected');
  }
});



// 검색창 toggle
$('#header .top-menu li:eq(0) a').on('click', function () {
  $('.search-modal__wrap').removeClass('invisible');
});

$('.search-modal__header .close-btn').on('click', function () {
  $('.search-modal__wrap').addClass('invisible');
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

imgEl.setAttribute('src', `./img/${chosenImgUrl}`);

// SCROLL MAGIC
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: 0.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});