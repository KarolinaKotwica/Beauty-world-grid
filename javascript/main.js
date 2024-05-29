let counter = 0;

let moveOpinion = () => {
    let slider = document.querySelector('.section-text-opinions--slider');
    let opinions = document.querySelectorAll('.opinions');
    let howMany = opinions.length;
    let widthOfOpinion = opinions[0].clientWidth;
    let maxIndex = howMany -3;

    counter ++;

    if (counter > maxIndex) {
        counter = 0;
    }

    const movement = -(counter * (widthOfOpinion + 15));
    slider.style.transform = `translateX(${movement}px)`;
}

setInterval(moveOpinion, 5000);

//date
let date = new Date();
year = date.getFullYear();

let changeDate = document.getElementById('date');
changeDate.innerText = year;

//sticky nav
window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.navigation');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.innerWidth > 800) {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
}