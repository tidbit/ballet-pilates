var slideTimer = 5000;
var slideID;

$(document).ready(function() {

  slideID = initSlideshow();


  $('#home-slider .slider-nav li').on('touchstart click', function(e) {
    e.stopPropagation(); e.preventDefault();

    clearInterval(slideID);
    loadSlide($(this).removeClass('current').attr('class'));
    slideID = restartSlideShow();

  });

  $('#home-slider .slide').hover(
    function() {

      var currentHover = $(this).attr('id');

      clearInterval(slideID);
      loadSlide(currentHover);

    },
    function() {

      slideID = restartSlideShow();

    }
  );

	var nav = $('.secondary-col');
	var toggleButton = $('#toggle-nav');

	toggleButton.click( function() {
		toggleButton.toggleClass('active');
		nav.toggleClass("hide").toggleClass("show");
	});

  // disable nav on escape key press
  $(document).keyup(function(e) {

    // Is escape keycode
    if (e.keyCode !== 27) return;

    // Is nav showing
    if( !nav.hasClass('show') ) return;

    toggleButton.removeClass('active');
    nav.removeClass('show').addClass('hide');

  });

});



function initSlideshow() {
  var slideshowID = setInterval(getNextSlide, slideTimer);
  return slideshowID;
}



function getCurrentSlide() {
  var currentSlide = $('#home-slider ul.slides li.current').attr('id');
  return currentSlide;
}


function getNextSlide() {

  var currentSlide = getCurrentSlide();

  if (currentSlide == "kids") {
    loadSlide('pilates');
  } else if (currentSlide == "pilates") {
    loadSlide('adult');
  } else if(currentSlide == "adult") {
    loadSlide('kids');
  }

}



function loadSlide(slide) {
  $('#home-slider li.current').removeClass('current');

  $('#home-slider .slides li#' + slide).addClass('current');
  $('#home-slider .slider-nav li.' + slide ).addClass('current');

  $('#home-slider .slides li').removeClass('hidden');

  if( slide === "kids" ) {
    $('#home-slider .slides li#adult').addClass('hidden');
  } else if ( slide === "pilates" ) {
    $('#home-slider .slides li#adult').addClass('hidden');
  } else if ( slide === "adult" ) {
    $('#home-slider .slides li#kids').addClass('hidden');
  }

}


function restartSlideShow() {
  var slideshowID = setInterval(getNextSlide, slideTimer);
  return slideshowID;
}
