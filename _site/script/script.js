/*
$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#mainContent');
  var offset = startchange.offset();
  if(startchange.length){
    $(document).scroll(function(){
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top){
        $(".navbar_default").css('background-color', '#d0d0d0');
      }
    });
  }
});
*/

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
      $(this).addClass("slide");
    }
  });
});
