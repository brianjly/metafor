
var nav = $("nav");

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    nav.addClass("fixnav");
  } else {
    nav.removeClass("fixnav");
  }
});
