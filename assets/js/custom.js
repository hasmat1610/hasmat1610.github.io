/* Set navigation */

$(".wrapper").removeClass("position-fixed-remove");

function openNav() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed");
  $("body").addClass("overflow-fixed");
}

function closeNav() {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed");
  $("body").removeClass("overflow-fixed");

  $(".wrapper").addClass("position-fixed-remove");
  setTimeout(function() {
    $(".wrapper").removeClass("position-fixed-remove");
  }, 4000);
}

$(document).ready(function(){ 

  $(".cd-shadow-layer").click(function(){
    closeNav(); 
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        
        $('.return-to-top').addClass("display_show");    
    } else {
        $('.return-to-top').removeClass("display_show");   
    }
  });

  $('#back-to-top').click(function() {    
    $('body,html').animate({
        scrollTop : 0                       
    }, 300);
  });

  $(window).scroll(function(){
    var sticky = $('.header-div'),
        scroll = $(window).scrollTop();
  
      if (scroll >= 260) sticky.addClass('header-bgcolor slideInDown animated');
      else sticky.removeClass('header-bgcolor slideInDown animated');

  });

});