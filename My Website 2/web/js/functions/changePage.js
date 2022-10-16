function changePage(pageName){

    document.getElementById(document.getElementById("contentBox").className).disabled = false; // enables the current disabled button

    var title = document.getElementById("contentTitle"); //gets the title and text and puts them in local vars
    var text = document.getElementById("contentText");

    title.style.animation = "none"; // refreshes animation
    text.style.animation = "none";
    
    switch(pageName){ // switches the page based on what id is passed when a button is pressed
        case "home":
            makeHome();
            break;
        case "aboutMe":
            makeAboutMe();
            break;
        case "education":
            makeEducation();
            break;
        case "workExperience":
            makeWorkExperience();
            break;
        case "contactMe":
            makeContactMe();
            break;
    }
}