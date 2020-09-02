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
  $("#formModal").submit(() => {
    alert("Спасибо! Ваша заявка принята! Скоро мы с Вами свяжемся.")
  });
  $(".modal-btn").click(() => {
    $(".modal").addClass("show");
  })
  $(".closeModal").click(() => {
    $(".modal").removeClass("show");
  })
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".modalWrapper");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $(".modal").removeClass("show");
      }
    });
  });
});