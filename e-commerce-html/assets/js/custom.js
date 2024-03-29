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

/* Back to top */
var btn = $(".backtotop-vendor");

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "1300");
});

/* End of Back to top */

$(function() {
  
  var link = $('.list-details-vendor .list-group-item-action');
  
  function scrNavClick() {
    link.on('click', function(e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top-164
      }, 600);
      $(this).addClass('active');
      e.preventDefault();
    });
  }
  
  $(window).on('scroll', function(){
    scrNav();
  });
  
  function scrNav() {
    var sTop = $(window).scrollTop();
    $('.list-item-body').each(function() {
      var id = $(this).attr('id'),
          offset = $(this).offset().top-194,
          height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('.vendor-details-div').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }

  if (window.matchMedia("(max-width: 1024px)").matches) {
    function scrNavClick() {
      link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top-114
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
      });
    }
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('.list-item-body').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top-144,
            height = $(this).height();
        if(sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('.vendor-details-div').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }

    scrNavClick();
    scrNav();
    
  } else {
    scrNavClick();
    scrNav();
  }
  
});