'use strict';

// header include
$('.header-include').load('../include/header.html', function () {
  setCurrentNav();

    // header영역
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
    if ($(window).width() >= 1024) {
      var index = $('#gnb > ul > li').index($(this).parent());
      $('#gnb > ul > li').removeClass('on');
      $('#gnb > ul > li:eq(' + index + ')').addClass('on');
    }
  });

  $('#header').on('mouseleave', function () {
    $('#gnb > ul > li').removeClass('on');
  });

  // 검색창 toggle
  $('#header .top-menu li:eq(0) a').on('click', function () {
    $('.search-modal__wrap').removeClass('invisible');
    enable();
  });

  $('.search-modal__header .close-btn').on('click', function () {
    $('.search-modal__wrap').addClass('invisible');
    disable();
  });

  // 모바일 메뉴
  $('#header .menu-btn').on('click', function () {
    $(this).addClass('invisible');
    $('#header .close-btn').removeClass('invisible');
    $('#gnb').addClass('open');
    $('#gnb > ul > li.active > a').trigger('click');
    enable();
  });

  $('#header .close-btn').on('click', function () {
    $(this).addClass('invisible');
    $('#header .menu-btn').removeClass('invisible');
    $('#gnb').removeClass('open');
    $('#gnb > ul > li.selected > a').trigger('click');
    disable();
  });

  $('#gnb > ul > li > a').on('click focusin', function (event) {
    if ($(window).width() < 1024) {
      if ($(this).parent().find('ul').length > 0) {
        event.preventDefault();
      }
      var index = $('#gnb > ul > li').index($(this).parent());
      $('#gnb > ul > li').removeClass('selected');
      $('#gnb > ul > li:eq(' + index + ')').addClass('selected');
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() >= 1024) {
      if ($('#gnb').hasClass('open') === true) {
        disable();
      } 
    } else if ($('#gnb').hasClass('open') === true){
      $('#header .menu-btn').trigger('click');
    }
  });

  // setCurrentNav function
  function setCurrentNav () {
    var bodyClass = $('body').attr('class');
    var splitClass = bodyClass.split(' ');
    if (splitClass[0] === 'main') {
      return false;
    }

    $('#gnb > ul > li').each(function (i) {
      if ($(this).attr('data-link') === splitClass[1]) {
        $(this).addClass('selected');
      } 
    });
    
    $('#gnb > ul > li.selected > .sub-menu > li').each(function (i) {
    if (splitClass[2] === undefined || splitClass[2] === null) {
      return false;
    }
      if ($(this).attr('data-menu') === splitClass[2]) {
        $(this).addClass('selected');
      }
    });
  }
});

// search modal include
$('.search-modal-include').load('../include/search-modal.html', function () {
  // 검색창 toggle
  $('#header .top-menu li:eq(0) a').on('click', function () {
    $('.search-modal__wrap').removeClass('invisible');
    enable();
  });

  $('.search-modal__header .close-btn').on('click', function () {
    $('.search-modal__wrap').addClass('invisible');
    disable();
  });
});

// footer include
$('.footer-include').load('../include/footer.html', function () {
  // 올해년도 구하기
  var thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();

  // footer info toggle
  var footerInfo = document.querySelector('#footer .info');
  var footerToggleBtn = footerInfo.querySelector('a');
  footerToggleBtn.addEventListener('click', function () {
    footerInfo.classList.toggle('open');
    if (footerInfo.classList.contains('open')) {
      var height = 0;
      height = $('#footer .info > div > .wrap').outerHeight(true);
      $('#footer .info').find('> div').css({'height': height + 'px'});
    } else {
      $('#footer .info').find('> div').css({'height': '0px'});
    }
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

  changeImg();

  function changeImg () {
    var imgEl = toTopBtn.querySelector('img.punch');
    var imgUrl = ['punch1.svg', 'punch2.svg', 'punch3.svg', 'punch4.svg'];
    var chosenImgUrl = imgUrl[Math.floor(Math.random() * imgUrl.length)];
    
    imgEl.setAttribute('src', `https://jeon-hyerin.github.io/cotieshop/img/${chosenImgUrl}`);
  }
});