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

$(".carousel-prints3").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true
});

$(".carousel-shoot").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
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

$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
  });

});


