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