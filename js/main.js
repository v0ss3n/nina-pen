//   function toggleVisibility1() {
//     var x = document.getElementById("look1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//   function toggleVisibility2() {
//     var x = document.getElementById("look1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//   function toggleVisibility3() {
//     var x = document.getElementById("look1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//   function toggleVisibility4() {
//     var x = document.getElementById("look1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//   function toggleVisibility5() {
//     var x = document.getElementById("look1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function toggleVisibility6() {
//   var x = document.getElementById("look1");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

// function toggleVisibility7() {
//   var x = document.getElementById("look1");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

// function toggleVisibility8() {
//   var x = document.getElementById("look9");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

// function toggleVisibility9() {
//   var x = document.getElementById("look9");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

// function toggleVisibility10() {
//   var x = document.getElementById("look10");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

// function toggleVisibility11() {
//   var x = document.getElementById("look11");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// }
// }

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
    arrows: false
    });    
  
  $(".carousel-residents2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
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

  $(".carousel-squares").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    verticalSwiping: true,
    autoplaySpeed: 1500
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


(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.menuNode = settings.menuNode;
    }
    
    toggleMenuState(className) {      
      if (typeof className !== 'string' || className.length === 0) {
        return console.log('you did not give the class for toggleState function');
      } 
      return  this.menuNode.classList.toggle(className);
    }
  }

  const jsMenuNode = document.querySelector('.menu');
  const demoMenu = new Menu ({
    menuNode: jsMenuNode
  });
  
  function callMenuToggle(event) {
    demoMenu.toggleMenuState('menu_activated');
  }
  
  jsMenuNode.querySelector('.menu__hamburger').addEventListener('click', callMenuToggle);
})();

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
