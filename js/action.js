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

    console.log( "ready!" );
});