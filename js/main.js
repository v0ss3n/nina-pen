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

  
 $('.carousel-heads').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.carousel-heads-nav'
});

$('.carousel-heads-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.carousel-heads',
  centerMode: true,
  focusOnSelect: true
});

$('.carousel-looks-nav').slick({
  slidesToShow: 11,
  slidesToScroll: 1,
  asNavFor: '.carousel-looks',
  centerMode: true,
  arrows: false,
  focusOnSelect: true
});

$('.carousel-looks').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.carousel-looks-nav'
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
  
  var homepageScene = document.getElementById("homepage-scene");
if (homepageScene) {
  var homepageParallax = new Parallax(homepageScene);
}

var aboutScene = document.getElementById("about-scene");
if (aboutScene) {
  var aboutParallax = new Parallax(aboutScene);
}

$(document).ready(function() {
 
  setTimeout(function(){
      $('body').addClass('loaded');
  }, 1000);

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

