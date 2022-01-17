function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".main-wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".main-wrapper").removeClass("position-fixed-custom");
  $("body").removeClass("overflow-fixed");
}

$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });

  $(window).scroll(function () {
    var sticky = $(".header-div"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("header-bgcolor slideInDown animated");
    } else {
      sticky.removeClass("header-bgcolor slideInDown animated");
    }
  });
});

var swiper = new Swiper(".banner-swiper-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    calculateHeight: true,
  },
});

var swiper02 = new Swiper(".blog-grid-swiper-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    calculateHeight: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper03 = new Swiper(".testimonial-swiper-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    calculateHeight: true,
  },
});

/* Pricing */

$(".pricing-grid-section").each(function (i, container) {
  var $container = $(container);
  $container.find(".pricing-switcher").on("click", function () {
    $container.find(".pricing-switcher").toggleClass("pricing-switcher-active");
    $container.find(".price").removeClass("price-hidden");
    $container.find(".price").toggleClass("price-show price-hide");
  });
});

/* End of Pricing */

document.addEventListener("DOMContentLoaded", function () {
  var typed3 = new Typed("#typed1", {
    strings: [
      "Your <i class='i01'>Knowledge</i> </br> + Our <i class='i02'>Support</i></br> = Revenue Generation",
      "Your <i>Content</i> </br> + Our <i>Technology</i></br> = Revenue Generation",
    ],
    typeSpeed: 50,
    backDelay: 900,
    backSpeed: 20,
    smartBackspace: true,
    loop: true,
  });
});

// if ($(".text-slider").length == 1) {
//   var typed_strings = $(".text-slider-items").text();

//   var typed = new Typed(".text-slider", {
//     strings: typed_strings.split(", "),
//     typeSpeed: 50,
//     loop: true,
//     backDelay: 900,
//     backSpeed: 30,
//   });
// }

// function toggleLoop(typed) {
//    if (typed.loop) {
//      typed.loop = false;
//    } else {
//      typed.loop = true;
//    }
//  }

// var typed3 = new Typed('#typed3', {
//   strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
//   typeSpeed: 0,
//   backSpeed: 0,
//   smartBackspace: true, // this is a default
//   loop: true
// });
