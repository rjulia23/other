$(".mainlink").click(function(e) {
  $(".blob").css({
    left: e.pageX + "px", 
    top: e.pageY+ "px", 
    transition: "all 3000ms",
  });
    console.log($(this).css("left") + "px" + ", y: " + e.pageY) ;
  
  setTimeout(function() {
 $('.blob svg').addClass('bigger-svg');
  //   $('.blob svg path').addClass('path-animation');
    }, 100);
  
});