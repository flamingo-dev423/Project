/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots [i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
        /*document.getElementById("buttonUn").style.backgroundColor = "transparent";
        document.getElementById("buttonUn").style.display = "inline";
        document.getElementById("buttonUn").style.margin = "0";
        document.getElementById("header").style.padding = "0";*/
    } else {
        header.classList.remove("sticky");
    }
}


//making darkmode possible
/*function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}*/