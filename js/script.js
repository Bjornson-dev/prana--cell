"use strict";



$(document).ready(function () {
  $('.slider-f').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoPlaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
  });
  $("#form").submit(() => {
    alert("Спасибо! Ваша заявка принята! Скоро мы с Вами свяжемся.")
  });

});