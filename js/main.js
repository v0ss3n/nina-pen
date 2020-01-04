  $(".carousel-model-2050").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });  

  $(".carousel-model-2050-2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: false
  });

  $(".carousel-residents").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true
  });    
  
  $(".carousel-residents2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true

  });  

  $(".carousel-illustrations").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });  

  $(".carousel-illustrations2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  });  

  $(".carousel-prints").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });  

  $(".carousel-prints2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  });  

  $(".carousel-collection").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    verticalSwiping: true,
    autoplaySpeed: 1500
  });  

  $(".carousel-sketches").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    arrows: false
  });  

  
"use strict";

var section = document.querySelector('.skew-scroll');
var currentPos = window.pageYOffset;

var update = function update() {
  var newPos = window.pageYOffset;
  var diff = newPos - currentPos;
  var speed = diff * 0.35;
  section.style.transform = "skewY(".concat(speed, "deg)");
  currentPos = newPos;
  requestAnimationFrame(update);
};

update();


// // scroll to next section

// $(document).ready(function() {
 	
//   var numbClick = 0;
  
//   $('a[href*="#scrolldown"]').click(function(){
    
//     var elemToGo = $(this).attr('href');
//     var speed = 750;
    
//     if(numbClick!=0){
//       elemToGo += numbClick;
//        if(!$(elemToGo).length){ // if the section #sectionAnyNumber doesn't exist, then.
//          elemToGo = "#scrolldown"; //I put back the first section.
//          numbClick=0; //I reinit the the value of number of click.
//        }
//     }
    
//     numbClick++;
   
//     $('html,body').animate(
//     {
//       scrollTop: $(elemToGo).offset().top
//     },speed
//     );
//     return false;
//   });
// });
