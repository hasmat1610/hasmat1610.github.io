function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed-custom");
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
      sticky.addClass("header-sticky");
    } else {
      sticky.removeClass("header-sticky");
    }
  });
});

jQuery(window).on("load resize orientationchange", function () {
  var header_height = jQuery(".header-div").outerHeight();
  var footer_height = jQuery("footer").outerHeight();
  var window_height = jQuery(window).outerHeight();
  var tot_height = window_height - footer_height;

  jQuery(".main-middle-area").css("min-height", tot_height);

  var header_height2 = jQuery(".header-white-div").outerHeight();
  jQuery(".main-middle-area").css("padding-top", header_height2);
});

/* Slider */

var menu = [];
jQuery(".swiper-home-banner").each(function (index) {
  menu.push(jQuery(this).find(".slide-bg-image").attr("data-text"));
});
var interleaveOffset = 0.5;

var swiper = new Swiper(".swiper-home-banner", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  parallax: true,
  loop: false,
  loopFillGroupWithBlank: false,
  watchSlidesProgress: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-nextHomeBanner01",
    prevEl: ".swiper-prevHomeBanner01",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: true,
  },
  on: {
    slideChangeTransitionStart: function () {
      // animeLetter();
    },

    /* For bg image */

    touchStart: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },

    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bg-image").style.transition =
          speed + "ms";
      }
    },
    /* End of bg image */
  },
});

var swiper02 = new Swiper(".swiper-card-box", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  parallax: true,
  loop: true,
  loopFillGroupWithBlank: false,
  watchSlidesProgress: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: true,
  },
});

var swiper03 = new Swiper(".popular-swiper-card-slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: false,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next-banquets",
    prevEl: ".swiper-prev-banquets",
  },
  pagination: {
    el: ".swiper-pagination-banquets",
    clickable: "true",
    dynamicBullets: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var swiper04 = new Swiper(".testimonials-swiper-slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: false,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-next-testimonials",
    prevEl: ".swiper-prev-testimonials",
  },
  pagination: {
    el: ".swiper-pagination-testimonials",
    clickable: "true",
    dynamicBullets: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

$(".swiper-home-banner, .swiper-card-box").each(function (index, element) {
  var swiperContainer = $(element).children(".swiper-container").get(0);
  var nextEl = $(element).children(".swiper-button-next").get(0);
  var prevEl = $(element).children(".swiper-button-prev").get(0);

  new Swiper(swiperContainer, {
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },
  });
});

var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
});

$("section, div").each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
});

$(".top-right-div #like-btn").on("click", function () {
  $(this).toggleClass("active");
});

/* Back to top */
(function () {
  var backTop = document.getElementsByClassName("js-cd-top")[0],
    offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 200,
    scrolling = false;

  if (backTop) {
    //update back to top visibility on scrolling
    window.addEventListener("scroll", function (event) {
      if (!scrolling) {
        scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(checkBackToTop, 250)
          : window.requestAnimationFrame(checkBackToTop);
      }
    });

    //smooth scroll to top
    backTop.addEventListener("click", function (event) {
      event.preventDefault();
      !window.requestAnimationFrame
        ? window.scrollTo(0, 0)
        : Util.scrollTo(0, scrollDuration);
    });
  }

  function checkBackToTop() {
    var windowTop = window.scrollY || document.documentElement.scrollTop;
    windowTop > offset
      ? Util.addClass(backTop, "cd-top--is-visible")
      : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
    windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
    scrolling = false;
  }
})();
/* End of Back to top */
