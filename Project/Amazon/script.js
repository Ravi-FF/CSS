//-------------------- slider------------------


let images = document.querySelectorAll(".first-section-img");
let imagenumber = 0;
function changeImage(z) {
    imagenumber = imagenumber + z;
    firstimageShow(imagenumber);
}
firstimageShow(imagenumber);
function firstimageShow(a) {
    if (a == images.length) {
        a = 0;
        imagenumber = 0;
    }
    if (a < 0) {
        a = images.length - 1;
        imagenumber = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
    }
    images[a].style.display = "block";
}

//----------top-left-slider---------------------//

let left_slider = document.querySelector(".left-slider");
function sliderClicke() {
    left_slider.style.transform = "translateX(0)";
}
function crossClick() {
    left_slider.style.transform = "translateX(-100%)"
}

// nav-slide 
let Nav_ul = document.querySelector("#navMenu")
function nav_show() {
    if ( Nav_ul.style.transform === "translateX(-100%)") {
        Nav_ul.style.transform = "translateX(0)"
    }else{
        Nav_ul.style.transform = "translateX(-100%)"
    }
}