'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault();
});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const body = document.querySelector('body');
var scrollPosition = 0;
// 모달창 열기
function enable() {
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollPosition}px`;
  body.style.width = '100%';
}
// 모달창 닫기
function disable() {
  body.style.removeProperty('overflow');
  body.style.removeProperty('position');
  body.style.removeProperty('top');
  body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
}

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



