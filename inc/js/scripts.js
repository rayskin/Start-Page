	(function ($) {

	  $(function () {

	    // ==========================================
	    // HEADER MARGIN FIX
	    // ==========================================
	    var headerHeight1a = $('#header').outerHeight();
	    $('#wrapper').css({
	      'padding-top': '' + headerHeight1a + 'px'
	    });
	    $('#header-overlay').css({
	      'margin-top': '' + headerHeight1a + 'px'
	    });
	    var headerHeight2a = $('body.logged-in #wpadminbar').outerHeight();
	    $('body.logged-in #header').css({
	      'top': '' + headerHeight2a + 'px'
	    });
	    $('body.logged-in #header-overlay').css({
	      'top': '' + headerHeight2a + 'px'
	    });
     $('body.logged-in').css({
	      'padding-top': '' + headerHeight2a + 'px'
	    });
	    $(window).on("load resize", function (e) {
	      var headerHeight1 = $('#header').outerHeight();
	      $('#wrapper').css({
	        'padding-top': '' + headerHeight1 + 'px'
	      });
	      $('#header-overlay').css({
	        'margin-top': '' + headerHeight1 + 'px'
	      });
	    });
	    $(window).on("load resize", function (e) {
	      var headerHeight2 = $('body.logged-in #wpadminbar').outerHeight();
	      $('body.logged-in #header').css({
	        'top': '' + headerHeight2 + 'px'
	      });
       $('body.logged-in').css({
         'padding-top': '' + headerHeight2 + 'px'
       });
	      $('body.logged-in #header-overlay').css({
	        'top': '' + headerHeight2 + 'px'
	      });
	    });


	    // ==========================================
	    // SNAP TO TOP ON LOAD
	    // ==========================================
	    $(document).ready(function () {
	      $(this).scrollTop(0);
	    });


	    // ==========================================
	    // INPUT - PLACEHOLDER
	    // ==========================================
	    $("#searchform input[type=text]").attr("placeholder", "Search");


	    // ==========================================
	    // BURGER
	    // ==========================================
	    $("#header-overlay, #search-overlay").hide();

	    $('#header-burger').click(function () {
       $(this).toggleClass("active");
	      $("#header-overlay").fadeToggle('fast');
	      $("body,html,header#header").toggleClass("menu-open");
	    });

	    $('#overlay-close').click(function () {
	      $("#header-overlay").hide();
	      $("body,html,header#header").removeClass("menu-open");
	      $("#header-burger").removeClass("active");
	    });

	    $(window).on("load resize scroll", function (e) {
	      if ($(window).width() < 1280) {} else {
	        $("#header-overlay").fadeOut('fast');
	        $("body,html,header#header").removeClass("menu-open");
	        $("#header-burger").removeClass("active");
	      }
	    });

	    // ==========================================
	    // ESC KEY CLOSE
	    // ==========================================
	    $(document).ready(function () {
	      $(document).keydown(function (e) {
	        if (e.keyCode == 27) {
	          $("#header-overlay").hide();
	          $("body,html,header#header").removeClass("menu-open");
	          $("#header-burger").removeClass("active");
	        }
	      });
	    });


	    // ==========================================
	    // PNT CLASSS TO FORMS
	    // ==========================================
	    $(document).ready(function () {
	      $("form.wpcf7-form").addClass(" pnt");
	      $("form.addify-quote-form").addClass(" pnt");
	    });


	    // ==========================================
	    // SELECT2
	    // ==========================================
	    $(document).ready(function () {
	      $('select').select2({
	        minimumResultsForSearch: -1
	      });
	    });


	    // ==========================================
			// SLICK SLIDER
	    // ==========================================
			$('.flex-field-slider').slick({
				slidesToShow: 1,
			  slidesToScroll: 1,
				centerMode: false,
				adaptiveHeight: true,
				nextArrow: '.flex-field-slider-next',
				prevArrow: '.flex-field-slider-prev',
			  asNavFor: '.flex-field-slider-nav'
			});
			$('.flex-field-slider-nav').slick({
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  asNavFor: '.flex-field-slider',
				arrows: false,
			  focusOnSelect: true,
				centerMode: false
			});
			$('.product-page-slider').slick({
			  infinite: true,
				arrows: false,
				dots: true
			});


			// ==========================================
	    // FEATHERLIGHT GALLERY
	    // ==========================================
	    $(document).ready(function () {
	      $('.widget_media_image a').featherlight({
	        type: 'image'
	      });
	      $('.widget_media_gallery a').featherlightGallery();
	    });


			// ==========================================
			// WOO
			// ==========================================
			$('body.single-product .single_add_to_cart_button').click(function () {
				//$(this).fadeOut('fast');
			});


			// ==========================================
			// HISTORY
			// ==========================================
			$(document).ready(function () {
			$( ".history-wrap .row .col-md-6" ).each(function() {
					if ($(this).visible(true)) {
							$(this).addClass('instant-active');
					}
			});
			});

			$(window).on("load resize scroll", function (e) {
			$( ".history-wrap .row .col-md-6" ).each(function() {
					if ($(this).visible(true)) {
							$(this).addClass('active');
					}
			});
			});



	  });//end

	}(jQuery));
