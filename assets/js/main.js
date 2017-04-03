

$(function(){
    var owl = $(".slider");
    
    var testimonial = $(".testimonials");
    
    testimonial.owlCarousel({
    
        items:1,
        loop:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000
    });
    
    owl.owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000
    });
    
    
    

    
        $('#pickup').change(function(){
    
        if($('#pickup').val() == "1"){
            $('#location').css("display","inline-block");
             $('#l-location').css("display","inline-block");
            $('#location').css("height","140px");
            $('#location').css("line-height","140px");
              $('#dropoff').css("display","none");
              $('#l-dropoff').css("display","none");
                 $('#var-form-group-2').css("padding","0");
        }else if($('#pickup').val() == "0"){
            $('#dropoff').css("display","block");
            $('#location').css("display","none");
             $('#l-dropoff').css("display","block");
            $('#l-location').css("display","none");
             $('#var-form-group-1').css("padding","0");
         
        };
            
});
    
    $('.navbar-toggle').click(function(){
         if($('#my-navbar').hasClass("collapse in") == false){
               $('.navbar-brand').css("color","#777");
         
        $('nav').css("background","white");
              $('.navbar-collapse').css("border","none");
           $('nav').css("transition","900ms");
              $('.navbar-default .navbar-nav > li > a').css("color","#777");
             $('.navbar-default .navbar-nav > li > a').hover(function(){
           $('.navbar-default .navbar-nav > li > a').css("color","#fff");
            });
             
        }else if($('#my-navbar').hasClass("collapse in") == true){
            
         $('.navbar-brand').css("color","white");
         
            
           $('.navbar-default .navbar-nav > li > a').css("color","white");
            
            $('.navbar-default .navbar-nav > li > a').hover(function(){
           $('.navbar-default .navbar-nav > li > a').css("color","#666");
            });
              $('nav').css("background","transparent");
             $('nav').css("transition","900ms");
        }
         
    });
    
    
    $(window).scroll(function(){
       if($(window).scrollTop() == 0 && $('#my-navbar').hasClass("collapse in") == false){
        $('#go-up').css("display","none");    
        $('nav').css("background","transparent");
           $('nav').css("transition","900ms");
           $('.navbar-brand').css("color","white");
           $('.navbar-default .navbar-nav > li > a').css("color","white");
       }else {
           $('#go-up').css("transition","500ms"); 
           $('#go-up').css("display","block"); 
           $('.navbar-brand').css("color","#777");
           $('nav').css("background","white");  
           $('nav').css("transition","300ms");
           $('.navbar-default .navbar-nav > li > a').css("color","#777");
       }
    });
    
    
    $('#go-up').click(function(e){
       $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    $('.navbar-nav > li > a').click(function(e){
       $('.navbar-nav > li > a').css("transition","5000"); 
    });
    
   
});
