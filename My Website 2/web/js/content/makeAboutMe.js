function makeAboutMe(){
    
    var imgArr = [ //array of images for the image carousel
        "pics/me at hershey small.png",
        "pics/me w the sis small.png",
        "pics/m w the boys small.png",
        "pics/me w woody small.png",
        "pics/me on the trail small.png",
        "pics/me w woody 2 small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    document.getElementById("contentBox").className = "aboutMe"; //changes class name so that the changePage function can determine the current page

    var contentBox = document.getElementById("contentBox"); //gets the content box, button, title, and the text and puts them in local vars
    var button = document.getElementById("aboutMe");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style.width = "30%";

    title.offsetHeight; //refreshes animation
    text.offsetHeight;

    title.style.animation = "fade-in 2s"; // fade in animation for text when loading in
    text.style.animation = "fade-in 2s";
    
    button.disabled = true; //disables button when clicked

    title.innerHTML = "About Me"; //changes the title and text for the page
    text.innerHTML = "Hello! My name is Christian Berkhimer, and I am an IS&T major at Temple University and am planning on graduating in December of 2023. "
                   + "I have experience in a variety of different languages, such as Java, C#, SQL, HTML, Javascript, CSS, and a little bit in Python and C++. "
                   + "I have been coding for around six years, and I still enjoy coding in my free time, whether it be for school or personal projects. "
                   + "Besides coding, in my free time I enjoy listening to music, reading, playing video games, and hanging out in Philadelphia with my friends.";

    console.log("About Me Page Selected");
}

