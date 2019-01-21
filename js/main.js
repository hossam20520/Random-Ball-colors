 //for touch screen  only
   /* $(document).on('touchstart', 'html', function(e) {
    var xPos = e.originalEvent.touches[0].pageX;
    var yPos = e.originalEvent.touches[0].pageY;

    
    var y = randomNumbers(13);
    var color = getColor(y);
    var btn = document.createElement("div");
    btn.className ="ball";
    btn.style.backgroundColor = color;
    btn.style.position = "absolute";
    btn.style.left = (xPos -25)+'px';
    btn.style.top = (yPos-25)+'px';
    document.body.appendChild(btn);
});*/


function getColor(num){
  var arr = ["red","green","yellow","black","blue", "#01875F","#CC99CC","#F99157","#E0D6DB","#0DBAFB", "#5F36A9","#FFAACF","#AEDC28","fake"]; 


return arr[num];
}


function  randomNumbers(range){
   var n = Math.floor(Math.random() * range);
   return  n;
}



//for both mobile and pc
$(document).ready(function (e) {

    $('html').click(function (e) { 
      
		
		 var xPos = e.pageX;
         var yPos = e.pageY;

    
    var y = randomNumbers(13);
    var color = getColor(y);
    var btn = document.createElement("div");
    btn.className ="ball";
    btn.style.backgroundColor = color;
    btn.style.position = "absolute";
    btn.style.left = (xPos -25)+'px';
    btn.style.top = (yPos-25)+'px';
    document.body.appendChild(btn);
		
    });

   
});






