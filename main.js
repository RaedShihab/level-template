let bars = document.getElementById('bars');
let nav = document.getElementById('nav');

bars.onclick = function () {
    nav.classList.toggle('active-nav');
}
function draw() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    console.log(canvas.width)
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width / 2, 90);
        ctx.fillStyle = '#ee5057';
        ctx.fill();
    }
  }
// draw();
let next = document.getElementById('next');
  let prev = document.getElementById('prev');
$(document).ready(function(){
    $('.multipel-items').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        prevArrow: prev,
        nextArrow: next,
    });
  });

  let video = document.getElementById("video");
  let play_pause_icon = document.getElementById("play-pause-icon");
  play_pause_icon.addEventListener('click', playPause);
  function playPause() {
    console.log(video.paused)
    if (video.paused) 
    video.play(); 
    else 
      video.pause();
  }
  