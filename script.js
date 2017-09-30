$(document).ready(function(){
    $('.item-info').hide()
  
    $('.item').mouseenter(function() {
      $(this).find('.item-info').fadeIn(300);
      $(this).css("cursor", "pointer");
    });
  
    $('.item').mouseleave(function() {
      $(this).find('.item-info').fadeOut(300)
    });
  
  });