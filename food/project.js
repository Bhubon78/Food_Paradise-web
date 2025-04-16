//Rohan's Js //
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
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

$(document).ready(function() {

    $(document).ready(function () {
        $('body').hide().fadeIn(2000);
        $('header').hide().slideDown(1500);
        $('.card').hide().each(function (index) {
            $(this).delay(index * 500).fadeIn(1500);
        });
    
    });
 
  // Fading in "Our Story" 
  $(".fade-in").each(function(i) {
      $(this).delay(i * 500).fadeIn(1500); 
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
   
  // cookies concept //
  
    $(document).ready(function () {
        // Cookies Pannel Show
        $('#cookieConsent').show();

        // Accept button
        $('#acceptCookies').on('click', function () {
        console.log('User accepted cookies');
        $('#cookieConsent').fadeOut();
        alert('Cookies Accepted')
        });

        // Decline button
    $('#declineCookies').on('click', function () {
        console.log('User declined cookies');
        $('#cookieConsent').fadeOut();
        alert('Cookies Declined')
        });
    });

});
