const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
        navbar.style.backgroundColor = 'black';
    } else {
        navbar.style.backgroundColor = 'grey';
    }
});

// .........................................................
// Gallery

