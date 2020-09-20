$(document).ready(function(){ 
    $('#product-owl').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        stagePadding: 0,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1200:{
              items:4
            } 
    
        }
    });

    $('#testimonial-owl').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        center: true,
        stagePadding: 0,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:3000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
              items:3
            } 
    
        }
    });

    $('#partner-owl').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        stagePadding: 10,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
              items:4
            } 
    
        }
    });
});

