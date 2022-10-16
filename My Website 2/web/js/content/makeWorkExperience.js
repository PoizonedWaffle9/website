function makeWorkExperience(){
    
    var imgArr = [ //array of images for the image carousel
        "pics/shannondell at night small.png",
        "pics/shannondell dining room small.png",
        "pics/ritas small.png"
    ];

    imageCarousel(imgArr); // starts the image carousel using the array of images

    document.getElementById("contentBox").className = "workExperience"; //changes class name so that the changePage function can determine the current page

    var contentBox = document.getElementById("contentBox"); //gets the content box, button, title, and the text and puts them in local vars
    var button = document.getElementById("workExperience");
    var title = document.getElementById("contentTitle");
    var text = document.getElementById("contentText");

    contentBox.style.width = "30%";

    title.offsetHeight; //refreshes animation
    text.offsetHeight;

    title.style.animation = "fade-in 2s"; // fade in animation for text when loading in
    text.style.animation = "fade-in 2s";
    
    button.disabled = true; //disables button when clicked

    title.innerHTML = "Work Experience"; //changes the title and text for the page
    text.innerHTML = "Regarding my job experience, I have worked in the service industry ever since 2016. My first job was Rita's Italian Ice, "
                   + "where I served customers and cleaned kitchen equipment. I worked there for about one and a half years until I went to work "
                   + "as a lead server at Shannondell Retirement Communities, where I have been working for around five years now. My experience "
                   + "in the service industry has helped me to gain skills to efficiently accomplish tasks while working in a team with my peers. "
                   + "I am currently searching for an internship to gain experience in my field of interest. My dream job would either be working "
                   + "in front end development or database management, as those are my two favorite areas to work in.";

    console.log("Work Experience Page Selected");
}

