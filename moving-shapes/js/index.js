var slow = 35;
var medium = 20;
var fast = 15;
var veryfast = 10;
var docHeight = $(document).height();
var docWidth = $(document).width();


//$(".circle").offset({top:500+currentMousePos.y/amount,left:500+currentMousePos.x/amount});
//$(".square").offset({top:300-currentMousePos.y/amount*3,left:1700-currentMousePos.x/amount*3});
$(document).mousemove(function(event) {
  var docHeight = $(document).height();
  var docWidth = $(document).width();
  var x = event.pageX;
  var y = event.pageY;
  
  $("#shape-1").offset({top:(docHeight*.05)+y/slow,left:(docWidth*.03)+x/slow});
  $("#shape-2").offset({top:(docHeight*.50)-y/slow,left:(docWidth*.75)-x/slow});
  $("#shape-3").offset({top:(docHeight*.20)+y/medium,left:(docWidth*.80)-x/medium});
  /*
  $("#shape-3").offset({top:(docHeight*top)+y/medium,left:(docWidth*left)-x/medium});
  
  */
  

   // $("#shape-1").offset({top:($(document).height()*.05)+y/slow,left:($(document).width()*.03)+x/slow});

 
  //  $(".square").offset({top:300-currentMousePos.y/amount*3,left:1700-currentMousePos.x/amount*3});
  //  $(".triangle-outline").offset({top:100+currentMousePos.y/amount/3,left:100-currentMousePos.x/amount/2});
   // $(".triangle").offset({top:200-currentMousePos.y/amount/2,left:100+currentMousePos.x/amount/3});
});