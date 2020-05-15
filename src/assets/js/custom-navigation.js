(function($) {
	
	"use strict";
	
	// Cache Selectors
	var mainWindow		=$(window),
		mainDocument	=$(document),
		myLoader		=$(".loader"),
		mytopBar		=$('#top-bar'),
		// searchBtn		=$(".search-button"),
		menuBtn			=$("#menu-button"),
		// overlay			=$(".overlay"),
		colorPanel		=$('#colorPanel');
	
	
	// Loader
	mainWindow.on('load', function () {
		myLoader.fadeOut("slow");
	});
	

	
	// Scroll
	$(document).ready(function(){
	
	  // Add smooth scrolling to all links
	  $(".landing-page-navbar a").on('click', function(event) {
	
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;
	
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
	});

	// Color Picker
	//mainDocument.on('ready', function(){
//		colorPanel.ColorPanel({
//			styleSheet: '#cpswitch'
//            , colors: {
//                '#4e73df': 'css/orange.css'
//                , '#00adef': 'css/lightblue.css'
//				, '#a6ce39': 'css/green.css'
//                , '#e62a2b': 'css/red.css'
//                , '#cc6699': 'css/purple.css'
//				, '#00cc99': 'css/caribbean-green.css'
//				, '#00cccc': 'css/egg-blue.css'
//				, '#ff884d': 'css/atomic.css'
//				, '#c68c53': 'css/brown.css'
//				, '#8a39ee': 'css/blue-violet.css'
//				, '#ff6262': 'css/pink.css'
//				, '#00cc44': 'css/pigment-green.css'
//		
//            , }
//            , linkClass: 'linka'
//            , animateContainer: false
//		});
//	});

})(jQuery);

		// *************Navigation Animation************

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav').addClass('height');
			    } else {
			        $('nav').removeClass('height');
			    }
			})
			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav .container').addClass('padding');
			    } else {
			        $('nav .container').removeClass('padding');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav#mynavbar').addClass('black-color');
			    } else {
			        $('nav#mynavbar').removeClass('black-color');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav#mynavbar.bg-light').addClass('black-color');
			    } else {
			        $('nav#mynavbar.bg-light').removeClass('black-color');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav.navbar#mynavbar.navbar-custom.navbar-transparent').addClass('white-color');
			    } else {
			        $('nav.navbar#mynavbar.navbar-custom.navbar-transparent').removeClass('white-color');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('.main-navbar#mynavbar .navbar-nav a').addClass('black-color1');
			    } else {
			        $('.main-navbar#mynavbar .navbar-nav a').removeClass('black-color1');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('.main-navbar#mynavbar a.navbar-brand').addClass('black-color1');
			    } else {
			        $('.main-navbar#mynavbar a.navbar-brand').removeClass('black-color1');
			    }
			})

			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('.main-navbar#mynavbar nav.navbar#mynavbar .navbar-search-link > li:last-child a').addClass('black-color1');
			    } else {
			        $('.main-navbar#mynavbar nav.navbar#mynavbar .navbar-search-link > li:last-child a').removeClass('black-color1');
			    }
			})



			$(window).on('scroll', function() {
			    if ($(window).scrollTop()) {
			        $('nav.navbar.main-navbar#mynavbar-2.bg-light').addClass('full-width');
			    } else {
			        $('nav.navbar.main-navbar#mynavbar-2.bg-light').removeClass('full-width');
			    }
			})


		// ***********Custom SideBar & SideNav************
		
			$(document).ready(function () {
			    $("#sidebar").mCustomScrollbar({
			        theme: "minimal"
			    });

			    $('#dismiss, .overlay').on('click', function () {
			        $('#sidebar').removeClass('active');
			        $('.overlay').removeClass('active');
			    });

			    $('#sidebarCollapse').on('click', function () {
			        $('#sidebar').addClass('active');
			        $('.overlay').addClass('active');
			        $('.collapse.in').toggleClass('in');
			        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
			    });
			});






			// ***********Custom SideBar & SideNav************

			function openSearch() {
			  document.getElementById("myOverlay").style.display = "block";
			}

			function closeSearch() {
			  document.getElementById("myOverlay").style.display = "none";
			}



			// ***********Nav Tabs Switching to work proplorly************

			$(".nav-pills .nav-item .nav-link:not(.nav-pills .nav-item .nav-link), .nav-tabs").click(function()
            {
                $("ul.nav.nav-tabs li.nav-item.active").removeClass('active');
            });



			// *********************Landing Page links Switching fix***********************

            $(".nav-links-active .navbar-nav li.nav-item").click(function()
            {
                $(".nav-links-active .navbar-nav li.nav-item.active").removeClass('active');
                $(this).addClass('active');
            });









			// ***********Video Playing on same page in Bootstrap 4************

			$(document).ready(function() {

			// Gets the video src from the data-src on each button

			var $videoSrc;  
			$('.video-btn').click(function() {
			    $videoSrc = $(this).data( "src" );
			});
			console.log($videoSrc);

			  
			  
			// when the modal is opened autoplay it  
			$('#myModal').on('shown.bs.modal', function (e) {
			    
			// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
			$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
			})
			  
			  
			// stop playing the youtube video when I close the modal
			$('#myModal').on('hide.bs.modal', function (e) {
			    // a poor man's stop video
			    $("#video").attr('src',$videoSrc); 
			}) 
			    
			    


			  
			  
			// document ready  
			});