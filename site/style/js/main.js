var slideTimer = 5000;

$(document).ready(function() {

  var slideID = initSlideshow();

  $('#home-slider li').hover(
    function() {

      var currentHover = $(this).attr('id');

      clearInterval(slideID);
      loadSlide(currentHover);

    },
    function() {

      slideID = restartSlideShow();

    }
  );

});



function initSlideshow() {

  var slideshowID = setInterval(getNextSlide, slideTimer);

  return slideshowID;
}



function getCurrentSlide() {
  var currentSlide = $('#home-slider li.current').attr('id');
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
  $('#home-slider li#' + slide).addClass('current');

}


function restartSlideShow() {

  var slideshowID = setInterval(getNextSlide, slideTimer);

  return slideshowID;

}
