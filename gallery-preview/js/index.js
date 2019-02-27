$( ".picker select" )
  .change(function() {
  if($( ".picker select" ).val()!="all"){

    //$(".square").css("display","none");
    $(".square").animate({width: "0px", padding:'0px',});
    $(".square .square-preview").animate({width: "0px"}); 
    $(".square .square-title").animate({width: "0px"}); 
    $(".square .square-title .square-label").animate({opacity: "0"});
    $(".square .square-title h1").animate({opacity: "0"});

    $("."+$( ".picker select" ).val()).animate({width: "450px", padding:'5px'});
    $("."+$( ".picker select" ).val() +" .square-preview").animate({width: "450px"});
    $("."+$( ".picker select" ).val() +" .square-title").animate({width: "450px"});
    $("."+$( ".picker select" ).val() +" .square-title .square-label").animate({opacity: "1"});
    $("."+$( ".picker select" ).val() +" .square-title h1").animate({opacity: "1"});                    


    //$("."+$( ".picker select" ).val()).css("display","block");
  }else{
    $(".square").animate({width: "450px", padding:'5px',});
    $(".square .square-preview").animate({width: "450px"}); 
    $(".square .square-title").animate({width: "450px"}); 
    $(".square .square-title .square-label").animate({opacity: "1"});
    $(".square .square-title h1").animate({opacity: "1"});
  }
})
  .trigger( "change" );

var clickedSquare;
$(".square").click(function(e) {
  $(".blob").css({
    left: e.pageX + "px", 
    top: e.pageY+ "px", 
  });

  clickedSquare = "#"+$(this).attr('id')+"-more";
  setTimeout(function() {
    $(".blob svg").css({display:"block",});
    $('.blob svg').addClass('bigger-svg');
  }, 100);
  setTimeout(function() {
    $(".blob svg").css({display:"none",});
    $(".blob").css({
      backgroundColor:"#a8f1ac",
      width:'100%',
      height:'100%',
      left: "0px", 
      top:"0px", 
    });
  }, 2000);
  setTimeout(function() {
    $(".portfolio-container").css("display", "none");
    $("#more-info").css("display", "block");
    $("#more-info").animate({
      width: "60%"
    }, function() {
      $(clickedSquare).fadeIn(300);
      $(".close-content").fadeIn(300);
    });

  }, 2100);
});



$(".close-content").click(function(e) {
  $(clickedSquare).fadeOut(300);
  $(".close-content").fadeOut(300);
  setTimeout(function() {
    $("#more-info").animate(
      {width: "0px"},
      function() {
        $(".portfolio-container").css("display", "block");
        $("#more-info").css("display", "none");
        $(".blob").animate(
          {width: "0px"},
          function() {
            $(".portfolio-container").css("display", "block");
          });
      });  
  }, 290);


});