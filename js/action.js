$( document ).ready(function() {

	$(window).scroll(function() {
		// when user scrolls site-header and mobile-header change color
	    if ($(this).scrollTop() > 0) {
	        $(".site-header, .mobile-header").css('background-color', 'white');
	        $(".site-header, .mobile-header").css('color', 'red');
	    } else {
	    	$(".site-header, .mobile-header").css('background-color', 'red');
	    	$(".site-header, .mobile-header").css('color', 'white');
	    }

	    // Hero text in front of the background image fades out on scroll 


	});

	// Add smooth scrolling animation when appropriate navigation links are clicked
	var bottomNavLink = $('.bottom-nav a');
	var heroNavLink = $('.hero-text a');
  
  // Smooth scrolling from bottom navigation link
  bottomNavLink.click(function(e) {
  	console.log('bottom nav link');
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500 );
  });

  // Smooth scrolling from hero navigation link
  // subtract header height which is 70px 
  heroNavLink.click(function(e){
	  	console.log('hero nav link');
	  	e.preventDefault();
	  	$('body,html').animate({
	  		scrollTop: $(this.hash).offset().top
	  	- 70}, 500);  	
  }); 

	// Hide and show mobile navigation when hamburger menu is clicked

    console.log( "ready!" );
});