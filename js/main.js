var $body = $('.banner');
var $star;
var width = $body.outWidth();
var height = $body.outHeight();

$('.html').on('click', function (e) {
  for (i = 0; 1 < 75; i++)
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Math.random() * height,
    left: Math.random() * width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'

  )
});
