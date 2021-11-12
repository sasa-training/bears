$(function() {
    var height=$("#header").height();
    $("body").css("margin-top", height);//10pxだけ余裕をもたせる
// ナビ
  $('.toggle_btn').click(function() {
    $(this).toggleClass('open_toggle');
    if ($(this).hasClass('open_toggle')) {
        $('nav').addClass('open_toggle');
    } else {
        $('nav').removeClass('open_toggle');
    }
    });
$(".menu-item-has-children > a").append("<button class='dropdown-toggle'></button>");
// スライダー
    let mySwiper = new Swiper ('.swiper', {
        slideToClickedSlide: true,
        loop: true, 
        navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev', 
        },
        breakpoints: {
        980: { 
            slidesPerView: 4,
            spaceBetween: 26,
        },
        768: {  
            slidesPerView: 3,
            spaceBetween: 26,
        },
        600: { 
            slidesPerView: 2,
            spaceBetween: 26,
        },
        0: { 
            slidesPerView: 1,
            spaceBetween: 26,
        },
    }
});
let mySwiper2 = new Swiper ('.swiper_member', {
  centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    navigation: { 
        nextEl: '.swiper-button-next_member', 
        prevEl: '.swiper-button-prev_member', 
    },
    breakpoints:{
        980: { 
            slidesPerView: 3.5,
            spaceBetween: 70,
        },
        768: {  
            slidesPerView: 3,
            spaceBetween: 60,
        },
        600: { 
            slidesPerView: 1,
            spaceBetween: 30,
        },
        0: { 
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});
let mySwiper3 = new Swiper ('.swiper_gallary', {
  centeredSlides: false,
    loop: true,
    speed: 1000,
    slidesPerView: 4,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        768: {  
            slidesPerView: 4,
            spaceBetween: 0,
        },
        600: { 
            slidesPerView: 3,
            spaceBetween: 0,
        },
        0: { 
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }
});
// タブ
$('.out_going_head').click(function(){
  $('.is-active').removeClass('is-active');
  $(this).addClass('is-active');
  $('.is-show').removeClass('is-show');
  const index = $(this).index();

  $('.panel').eq(index).addClass('is-show');
});
});
