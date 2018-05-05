$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu').slideToggle(500);
  })
  $(window).resize(function(){
    if($(window).width() > 795){
      $('.menu').removeAttr('style');
    }
  })
})