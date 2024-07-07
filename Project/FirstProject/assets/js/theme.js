window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar-example2");
    if (window.pageYOffset > 50) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
})