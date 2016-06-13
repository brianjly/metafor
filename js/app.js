<!--Scrolling Features -->

var nav = $("nav");
var particles = $("#particles-js")

$(window).scroll(function(){

  s = $(this).scrollTop()

  if (s > 50) {
    nav.addClass("fixnav");
  } else {
    nav.removeClass("fixnav");
  }

  particles.css("top","-" + (s/2) +"px");


});

<!--Vuejs-->

new Vue({

  el:"#app",

  data: {message: "Wassup dudes"}

});



<!--jQuery -->


$(function(){

  $("#searchimg").click(function(){
      $("#searchbar").fadeToggle();
  });

  $("#loginbutton").click(function(){
      $("#login-overlay").css("display","block")
  });

  $("#exit").click(function(){
      $("#login-overlay").css("display","none")
  });

});





<!--ParticlesJS json data -->

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 151,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 60,
        "height": 60
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
