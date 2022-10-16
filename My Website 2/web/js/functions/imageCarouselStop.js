function imageCarouselStop(){
    var image = document.getElementById("contentImage");
    image.className = "";
    image.style.animation = "none";
    image.removeEventListener("animationend",function(){
        if(image.className != "imageCarousel")
            return;
        imgIndex++;
        if(imgIndex >= imgArr.length)
            imgIndex = 0;
        image.src = imgArr[imgIndex];
        image.style.animation = "none";
        image.offsetHeight;
        image.style.animation = "fade-in-out 3s";
    });
}