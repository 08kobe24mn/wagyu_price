$(function() {
  $('#page-top').click(function() {
    var position = $('body').offset().top;
    $('html, body').animate({scrollTop:position});
    return false;
  });
})