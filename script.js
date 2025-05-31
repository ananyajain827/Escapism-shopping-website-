let lastScrollTop = 0; // Keep track of the last scroll position
const navbar = document.querySelector('.bottom-navbar');

// Add scroll event listener to detect scrolling
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.style.bottom = "-60px"; // Hide the navbar by moving it down
    } else {
        // Scrolling up, show the navbar
        navbar.style.bottom = "0"; // Bring the navbar back to the bottom
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll position
});



