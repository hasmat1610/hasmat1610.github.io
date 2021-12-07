function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".general-wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".general-wrapper").removeClass("position-fixed-custom");
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
