function imageCarousel(imgArr){

    var image = document.getElementById("contentImage"); // gets the image dom and puts it in a local var and sets the class name to "imageCarousel"
    image.className = "imageCarousel";

    var imgIndex = 0; // sets the index for the image array to 0 and puts whatever image is in index 0 as the src for the image
    image.src = imgArr[imgIndex];

    var imageAnimation = "3s ease 0s 1 normal none running fade-in-out"; // resets the animation for the image to start the carousel
    image.style.animation = "none";
    image.offsetHeight;
    image.style.animation = imageAnimation;

    image.addEventListener("animationend", function(){ // event listener to detect when the fade-in-out animation is complete and changes the image

        if(image.style.animation === imageAnimation){ // makes sure that the event only triggers on the fade-in-out animation

            imgIndex++; // increases the index to select the next image

            if(imgIndex >= imgArr.length) // if the index surpasses the array length, the index is set back to 0
                imgIndex = 0;

            image.src = imgArr[imgIndex]; // sets a new image based on the index

            image.style.animation = "none"; // restarts the animation for the new image, creating an infinite looping image carousel
            image.offsetHeight;
            image.style.animation = imageAnimation;

        }
    });
    /*
    ----------------------------------NOTE----------------------------------
    The trigger for the start of the carousel is the "fade-in-out" animation 
    located in the content.css file. The event listener created above will
    start the loop when it detects that the animation has ended. Therefore,
    only use the "fade-in-out" animation for use with the image carousel.
    ------------------------------------------------------------------------
    */
}