$(function(){
   
  var i= 0;
    
    
    function changeColor(){
    var colors = ['black','pink','lightblue','orange','yellow'];
    
    if(i < 5){
        $('body').css("transition",'2000ms');
        $('body').css("background",colors[i]);    
    }
        i++;
       
    }
   
    setInterval(changeColor(),"1000ms");
    
});