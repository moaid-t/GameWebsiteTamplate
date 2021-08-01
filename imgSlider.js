$('.owl-carousel').owlCarousel({
    stagePadding: 87,
    rtl:true,
    loop:true,
    autoplay:true,
    margin: 47,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1024:{
            items:3
        },
        1100:{
            items:4
        }
    }
})