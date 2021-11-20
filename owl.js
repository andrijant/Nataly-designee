
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots: true,
    
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    stagePadding: 50,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})