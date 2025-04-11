window.addEventListener('load', function () {
  alert("Welcome to FOOD Paradise! Get ready for a delicious experience 🍽️");
});

// Scroll button after scroll
window.onscroll = function () {
  let btn = document.getElementById("backToTopBtn");
  if (document.documentElement.scrollTop > 100) {
      btn.style.display = "block";  // Display button after scrolling down
  } else {
      btn.style.display = "none";  // Hide button if scrolled to the top
  }
};

// Scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Smooth scroll back to the top
}

$(document).ready(function() {
  // Animate the body by fading it in
  $('body').hide().fadeIn(2000);  // Fade in the body over 2 seconds

  // Slide down the header with an animation
  $('header').hide().slideDown(1500);  // Slide down header over 1.5 seconds

  // Fade in elements with the class .fade-in
  $('.fade-in').hide().fadeIn(1500);  // Fade in the elements over 1.5 seconds

  // Animate the cards with a delay for a staggered effect
  $('.card').each(function(index) {
      $(this).delay(index * 500).fadeIn(1500);  // Staggered fade-in for each card
  });
  // Fading in "Our Story" content after the page load
  $(".fade-in").each(function(i) {
      $(this).delay(i * 500).fadeIn(1500);  // Delay each fade-in for smooth sequence
  });

  // Scroll effect for animating "Our Story" on scroll
  $(window).scroll(function() {
      $('.fade-in').each(function() {
          var elementOffset = $(this).offset().top;  // Get the element's position
          var windowScroll = $(window).scrollTop();  // Get the current scroll position
          var windowHeight = $(window).height();  // Get the window height

          // Check if the element is in the viewport
          if (elementOffset < windowScroll + windowHeight - 100) {
              $(this).addClass('fade-in');  // Add fade-in class when the element is in view
          }
      });
  });

  if (!localStorage.getItem('cookieAccepted')) {
        $('#cookieConsent').fadeIn();
    }

    // Accept Cookies
    $('#acceptCookies').click(function () {
        localStorage.setItem('cookieAccepted', 'true');
        $('#cookieConsent').fadeOut();
        alert('You have accepted the cookies!');
    });

    // Decline Cookies
    $('#declineCookies').click(function () {
        localStorage.setItem('cookieAccepted', 'false');
        $('#cookieConsent').fadeOut();
        alert('You have declined the cookies.');
    });
});
