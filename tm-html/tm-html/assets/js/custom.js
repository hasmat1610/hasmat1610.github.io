$(document).ready(function () {
  /* mobile menu */
  $("#menu-open").click(function () {
    $("#dashboard-menu-clone").addClass("active");
    $(".left-side-nav").addClass("active");
    $(".backdrop-menu-layer").addClass("active");
    $(".nav-dashboard-right").addClass("active");
  });

  $("#menu-closed").click(function () {
    $("#dashboard-menu-clone").removeClass("active");
    $(".left-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });

  $(".backdrop-menu-layer").click(function () {
    $("#dashboard-menu-clone").removeClass("active");
    $(".left-side-nav").removeClass("active");
    $(".backdrop-menu-layer").removeClass("active");
    $(".nav-dashboard-right").removeClass("active");
  });
  /* End of mobile menu */

  /* Desktop collapse menu */
  $("#collapse-nav").click(function () {
    $(this).toggleClass("collapsed-menu");
    $(".left-side-nav").toggleClass("collapse-menu");
    $(".header-dashboard").toggleClass("collapsed-header");
    $(".main-dashboard").toggleClass("dashboard-expand");
    $("body").toggleClass("mini-navbar");
    $(".left-side-menu").addClass("text-fixed-remove");
    setTimeout(function () {
      $(".left-side-menu").removeClass("text-fixed-remove");
    }, 200);
  });

  $("#menu-collpese-open").click(function () {
      $(".left-side-nav-main-root").toggleClass("active").toggleClass("active-hg-left-root");
      $("#main-dashboard").toggleClass("active").toggleClass("active-hg-main-dashboard");
  });

  /* End of desktop collapse menu */

  $("[data-toggle='tooltip']").tooltip();

  /* File Upload */
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  $(".file-upload").on("change", function () {
    readURL(this);
  });
  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
  /* End of File Upload */
});
