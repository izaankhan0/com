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
    }, 7000);
  });
  
  
document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.reviews-subs');
    const dots = document.querySelectorAll('.dot');
    let currentReviewIndex = 0;
  
    function showReview(index) {
      reviews[currentReviewIndex].classList.remove('active');
      reviews[currentReviewIndex].classList.add('transition-out');
      dots[currentReviewIndex].classList.remove('active');
  
      currentReviewIndex = index;
  
      reviews[currentReviewIndex].classList.add('active');
      reviews[currentReviewIndex].classList.remove('transition-out');
      dots[currentReviewIndex].classList.add('active');
    }
  
    function autoChangeReview() {
      showReview((currentReviewIndex + 1) % reviews.length);
    }
  
    setInterval(autoChangeReview, 15000);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        if (currentReviewIndex !== index) {
          showReview(index);
        }
      });
    });
  });