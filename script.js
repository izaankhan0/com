function scrollToTop() {
    window.scrollTo(0, 0);
}


// Show the navigation bar when the mouse enters the top 20px of the screen
function showNavbar() {
    document.querySelector('.reddit').classList.add('show-reddit');
}

// Hide the navigation bar after 3 seconds of the mouse leaving the top 20px of the screen
function hideNavbar() {
    setTimeout(function() {
        document.querySelector('.reddit').classList.remove('show-reddit');
    }, 8000);
}

// Add event listeners to handle mouse hover events
window.addEventListener('scroll', function() {
    if (window.scrollY <= 70) {
        showNavbar();
        hideNavbar();
    }
});

window.addEventListener('mousemove', function(e) {
    if (e.clientY <= 70) {
        showNavbar();
        hideNavbar();
    }
});

window.addEventListener('load', function() {
    const loader = document.querySelector('#preloader');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 3000);
  });
  
  