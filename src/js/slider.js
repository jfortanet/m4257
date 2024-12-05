/* Image slider in presentation.html */

let sliderInner = document.querySelector(".slider-inner");
let images = sliderInner.querySelectorAll("img");
let currentImage = 0;

/**
 * Function that automatically changes the image displayed in the slider.
 * Every 5 seconds the function moves the position of the slider image 
 * horizontally to show the next image, creating a continuous circular effect.
 */
setInterval(() => {
    let percentage = currentImage * -100; // Displacement percentage.
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    currentImage++;
    if (currentImage > (images.length - 1)) {
        currentImage = 0;
    }
    /* currentImage = currentImage % (images.length); */
    

}, 5000);
