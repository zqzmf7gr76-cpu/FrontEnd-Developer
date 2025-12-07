document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const closeButton = document.querySelector(".close-button");
    const body = document.body;
    const navLinks = document.querySelectorAll(".main-nav ul li a");

    // Συνάρτηση για άνοιγμα/κλείσιμο του μενού
    function toggleMenu() {
        if (mainNav && menuToggle && body) {
            mainNav.classList.toggle("active");
            menuToggle.classList.toggle("active");
            body.classList.toggle("no-scroll"); // Αποτρέπει την κύλιση του υποκείμενου περιεχομένου
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }
    if (closeButton) {
        closeButton.addEventListener("click", toggleMenu);
    }
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    AOS.init({
        duration: 800, 
        once: true,
        easing: "ease-in-out" 
    });
});