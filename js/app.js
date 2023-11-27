$(document).ready(function(){
    //Sliders
    $("#hero-slider").owlCarousel ({
    loop: true,
    margin: 0, 
    nav: true, 
    items: 1, 
    dots: false, 
    navText: ["PREV", "NEXT"],
    responsive: {
    0: {
    nav: false,
    },
    768: {
    nav: true,
    },
    },
    });
    
    //Sliders de Otros servicios
    $("#projects-slider").owlCarousel({
    loop: true, 
    nav: false, 
    items: 2, 
    dots: true, 
    smartsbeea: 600,
    center: true, 
    autoplay: true, 
    autoplayTimeout: 4000, 
    responsive:{
        0: {
            items:1,
        },
    768: {
    items: 2,
    margin: 8,
    },
    },
    });
    
    $(".owl-carousel").owlCarousel({
    loop: true, 
    nav: false,
    dots: true, 
    smartSpeed: 900,
    items: 1, 
    margin: 24, 
    autoplay: true, 
    autoplayTimeout: 4000,
    });
    });