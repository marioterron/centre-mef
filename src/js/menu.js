$(function() {
  $('body').prepend('<div class="overlay">');
  $('#js-icon-menu').click(function() {$('html').addClass('active');});
  $('#js-icon-close').click(function() {$('html').removeClass('active');});
  $('.menu__items ul a').click(function() {$('html').removeClass('active');});
});