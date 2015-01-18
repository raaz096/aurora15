
(function($) {
  "use strict";

//======= On Document Ready ============
$(window).load(function(){ 
	$('#page-loader').fadeOut(400, function(){
		//Typed
		$(".type-this").delay(2500).typed({
		    strings: ["Ensnaring Thy Senses","The 20`s Extravaganza", "20th - 22nd, February 2015", "Coming Soon"],
		    typeSpeed: 100,
		    backDelay: 4000,
		    loop: true,
		    callback: function(){ 
		    	//$('.typed-cursor').fadeOut(200);
		    }
		});      
	}); 
	 //Intro Animations
    $('.logo-image').addClass('animated').addClass('fadeInLeft');
    $('.header-right').addClass('animated').addClass('fadeInRight');
     $('.main-container').addClass('animated').addClass('fadeInUp');
	 
  //$('.tags-slides').addClass('fadeInRight');	
});


//==== On Document Ready ========
$(document).ready(function(){
//viewport
	var windowHeight = $(window).height();
	$('.viewport').css('height', windowHeight);
	$('.viewport2').css('height', windowHeight+150);

  setInterval(function(){
    var bodyHeight = $('.main-content').outerHeight();
    $('.bodyheight').css('height', bodyHeight);
  }, 200);	  

  $(window).resize(function(){
    windowHeight = $(window).height();
    $('.viewport').css('height', windowHeight);
    $('.viewport2').css('height', windowHeight+150);

    bodyHeight = $('.main-content').outerHeight();
	 $('.bodyheight').css('height', bodyHeight);
  });



//plax 
$('.plax-container').plaxify({"xRange":10,"yRange":10,"invert":true});
$.plax.enable();

//box
  $('.page-bg').click(function(){
  	//$('.page-wrap').fadeOut(300);
  });
  $('.close-box-button').click(function(){
  	$('.page-wrap').fadeOut(300);
  });
  $('.page-box').click(function(){
  });
//open box
	$('.open-mail').click(function(){
		$('.page-wrap-contact').fadeIn(300);
		$('.page-box-contact').addClass('fadeInUp');
		//Body Height
		var bodyHeight = $('.main-content').outerHeight();
		$('.bodyheight').css('height', bodyHeight);
		event.preventDefault();
	});

	$('.open-about').click(function(){
		$('.page-wrap-about-us').fadeIn(300);
		$('.page-box-about-us').addClass('fadeInUp');
		//Body Height
		var bodyHeight = $('.main-content').outerHeight();
		$('.bodyheight').css('height', bodyHeight);
		event.preventDefault();
	});

//validation
$("#contactError").hide();
$("#contactSuccess").hide();
$('.form-send input').click(function(){
	$(this).attr("value", "Sending...");
});
$("#contactForm").validate({
	invalidHandler: function(event, validator) {
	    $('.form-send input').attr("value", "Send");
	  },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/contact-form.php",
        data: {
          "name": $("#contactForm #name").val(),
          "email": $("#contactForm #email").val(),
          "subject": $("#contactForm #subject").val(),
          "message": $("#contactForm #message").val()
        },
        dataType: "json",
        success: function (data) {
          if (data.response == "success") {
          	$('#contactForm').slideUp(200, 'linear');
            $("#contactSuccess").delay(400).slideDown(300, 'linear');
            $("#contactError").hide();

            $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
              fadeOut(400);        
            
          } else {
          	$('#contactForm').slideUp(300);
            $("#contactError").fadeIn(300);
            $("#contactSuccess").hide();
            $('.form-send input').attr("value", "Send");
          }
        }

      });
    }
  });
});
})(jQuery);

