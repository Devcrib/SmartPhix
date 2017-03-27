
$(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items:1,
        loop:true,
        dots:true,
        animateIn: 'flipInY',
        animateOut: 'flipOutY',
        autoplay:false,
        autoplayTimeout:1000
    });

    $(".owl-partners").owlCarousel({
        items:1,
        dots:true,
        margin:10,
        nav:false
    });

});
