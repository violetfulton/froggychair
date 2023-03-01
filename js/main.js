import urls from "./urls.js";

// photos list
window.onload = displayImage;

function displayImage(){
    var num = Math.floor(Math.random() * (urls.length));
    document.getElementById("myPic").src = urls[num];
}

