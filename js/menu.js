$(function() {
  $('.header').prepend('<div id="overlay">');
  $('#menu__trigger').click(function() {$('html').addClass('active');});
  $('#menu__close').click(function() {$('html').removeClass('active');});
  $('.nav__item').click(function() {$('html').removeClass('active');});
});
