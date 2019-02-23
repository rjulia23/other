var allImages=[
  ['http://juliaroga.com/wp-content/uploads/2019/02/sign-up-ui.png','#signUpPage'],
  ['http://juliaroga.com/wp-content/uploads/2019/02/credit-card.png',0],
  ['http://juliaroga.com/wp-content/uploads/2019/02/credit-card.png',0],
  ['http://juliaroga.com/wp-content/uploads/2019/02/sign-up-ui.png',0],
  ['http://juliaroga.com/wp-content/uploads/2019/02/credit-card.png',0]
];
var items = '';
var nextImage;

$(".carousel-inner").mouseenter(function(){
    $('a.btn').addClass('more-button-hover');
}).mouseleave(function(){
      $('a.btn').removeClass('more-button-hover');
}); 


for(var i = 0 ; i < allImages.length ; i++){
  if(i>0){
    items += '<div class="carousel-item">';
  }else{
    items += '<div class="carousel-item active">';
  }

  if(allImages[i][1]!=0){
    items += '<a class="btn btn-lg more-button" data-toggle="modal" href="'+allImages[i][1]+'">see it in action</a>';
  }

  items += '<img src="'+allImages[i][0]+'" data-value="'+i+'" class="d-block w-100" alt="..."></div>';
}

$(".carousel-inner").html(items);

  $(".next-icon").attr('src',allImages[1][0]);
$(".prev-icon").attr('src',allImages[allImages.length-1][0]);


function forwardArrow() {
   $(".prev-icon").attr('src',$(".active img").attr('src'));
  
  nextImage = $(".active img").data('value')+2;
  if(nextImage>allImages.length-1){nextImage=$(".active img").data('value')+2-allImages.length;}
  $(".next-icon").attr('src',allImages[nextImage][0]);
  
  changeBackground();
    
}
function backArrow() {
 $(".next-icon").attr('src',$(".active img").attr('src'));
  nextImage = $(".active img").data('value')-2;
  if(nextImage<0){nextImage=$(".active img").data('value')-2+allImages.length;}
  $(".prev-icon").attr('src',allImages[nextImage][0]);
  changeBackground();
}

function changeBackground() {
  var hue = Math.floor(Math.random() * 361);
  document.getElementById("backgroundSquare").style.backgroundColor = "hsl(" + hue + ",43%,82%)";
  document.getElementById("backgroundSquare").style.borderRadius =blobShape(50, 50);
  $(".more-button").css("border-radius",blobShape(80, 50));
  $(".more-button").mouseenter(function(){($(".more-button").css("background-color","hsl(" + hue + ",43%,82%)"))}).mouseleave(function(){($(".more-button").css("background-color","hsl(300,0%,15%)"))});
}

function blobShape(amount, bottom){
  var shapeSize = Math.floor(Math.random() * amount + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%"+" \/ " +
      (Math.floor(Math.random() * amount) + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%" +
      (Math.floor(Math.random() * amount) + bottom) +
      "%";
  return(shapeSize);
}