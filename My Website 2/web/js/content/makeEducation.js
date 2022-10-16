function makeEducation(){

    var imgArr = [ //array of images for the image carousel
        "pics/bell tower small.png",
        "pics/temple station small.png",
        "pics/temple flag small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    document.getElementById("contentBox").className = "education"; //changes class name so that the changePage function can determine the current page

    var contentBox = document.getElementById("contentBox"); //gets the content box, button, title, and the text and puts them in local vars
    var button = document.getElementById("education");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style.width = "30%"; //Changes the size of the content box

    title.offsetHeight; //refreshes animation
    text.offsetHeight;

    title.style.animation = "fade-in 2s"; // fade in animation for text when loading in
    text.style.animation = "fade-in 2s";
    
    button.disabled = true; //disables button when clicked

    title.innerHTML = "Education"; //changes the title and text for the page
    text.innerHTML = "I started my college education at Temple University during August of 2019. I am an Information Science and Technology major in my fourth year "
                   + "and I am expected to graduate in December of 2023. I have taken a lot of different courses over the years covering various coding languages "
                   + "and techniques such as Java, C#, and SQL just to name a few. ";

    console.log("Education Page Selected");
}

