// button navbar
$(".button-collapse").sideNav();

// slider
$(document).ready(function(){
   $('.slider').slider({
   	indicators: false,
   	height: 500,
   	transform: 500,
   	interval: 3000
   });
});

// about

$(window).scroll(function() {
  const wScroll = $(this).scrollTop();
  if (wScroll > $('.about').offset().top - 400) {
    $('.kiri').addClass('kiriMuncul');
    $('.kanan').addClass('kananMuncul');
  }
  
});


// parallax
    $(document).ready(function(){
      $('.parallax').parallax();
    });

// smooth scroll
  $(document).ready(function(){
    $('.scrollspy').scrollSpy({
    	scrollOffset: 50
    });
  });


