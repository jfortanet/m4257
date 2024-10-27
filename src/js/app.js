let sliderInner = document.querySelector(".slider-inner");
let images = sliderInner.querySelectorAll("img");
let currentImage = 0;

setInterval(function() {
    let percentage = currentImage * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    currentImage++;
    if (currentImage > (images.length - 1)) {
        currentImage = 0;
    }
}, 3000);

