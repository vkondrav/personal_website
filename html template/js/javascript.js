$(window).load(function() {
	 
	 
	// Opera has some troubles supporting this hr so we will disable it
	"use strict"; 
	if (window.opera) {
		$('hr').css('display', 'none');
	}
	
	// Mobile nav menu (select) location
	$("nav select").change(function() {
		$('html, body').animate({scrollTop: ($($(this).find("option:selected").val()).position().top - 60) + "px"}, 700);
	});
	
	//
	// Smooth scrolling effect
	//
	$('nav a, nav select, #top-button').click(function(){
		$('html, body').animate({scrollTop: ($(this.hash).position().top - 60) + "px"}, 700);
		return false;
	});
	
	$(window).scroll(function(){
		$('section').each(function() {
			if($(window).scrollTop() + $(window).height() / 3 >= $(this).position().top ) {
				$('nav ul a').each(function() {
					$(this).removeClass('highlight');
				});
				$('nav ul a[href="#' + $(this).attr('id') + '"]').addClass('highlight');	
			}
		});
		
		if($(window).scrollTop() >= $('#home').height()*2/3) {
			$('#fixed-header').addClass('shown');
			$('#top-button').css('right', '5%');
		}
		else {
			$('#fixed-header').removeClass('shown');
			$('#top-button').css('right', '');
		}
	});
	

	function getActualHeight(elem) {
		var height_t = elem.css('height');
		var height = elem.css('height', '').css('height', 'auto').height();
		elem.css('height', height_t);
		return height;
	}
	//
	// Elements animations and effects
	//
	
	// Horizontal bar width calculation
	$('.h-bar li').each(function() {
		$(this).css('width', $(this).data('percentage'));
	});
		
	// Accordion
	$('.accordion .toggle').click(function() {
		if(!$(this).hasClass('pressed')) {
			$(this).parent().find('.pressed').find('.content').addClass('hidden');
			$(this).parent().find('.pressed').removeClass('pressed');
		}
	});
	
	// Toggles
	$('.toggle').click(function() {
		if($(this).hasClass('pressed')) {
			$(this).find('.content').addClass('hidden');
			$(this).removeClass('pressed');
		}
		else {
			$(this).find('.content').removeClass('hidden');
			$(this).addClass('pressed');
		}
	});

	
	
	// Tabs
	$('.tab-top').each(function() {
		$(this).parent().height('auto');
		$(this).parent().height($(this).parent().height() + $(this).find('.content').outerHeight());
	});
	$('.tab').click(function() {
		$(this).parent().find('.tab').each(function() {
			$(this).removeClass('tab-top');
		});
		$(this).parent().height('auto');
		$(this).parent().height($(this).parent().height() + $(this).find('.content').outerHeight());
		
		$(this).addClass('tab-top');
	});
	
	
	// Timebar
	$('.timebar').each(function() {
		var timeStart = parseInt(($(this).data('start') + "").split('-')[0], 10);
		var timeEnd = parseInt(($(this).data('end') + "").split('-')[0], 10);
		var years = timeEnd - timeStart;
		
		var i = 0;
		for(i; i <= timeEnd - timeStart - 1; i++) {
			$(this).find('.the-lines').append('<div class="line" style="left:' + (i  * 100 / years) + '%;"></div>');
			$(this).find('.the-lines').append('<span class="line-no" style="left:' + (i  * 100 / years) + '%;">' + (timeStart+i) + '.</span>');
		}
		$(this).find('.the-lines').append('<div class="line" style="left:' + ((i) * 100 / years) + '%;"></div>');
		
		$(this).find('li').each(function() {
			var timeStartLi = parseInt(($(this).data('start') + "").split('-')[0], 10) * 12 + parseInt(($(this).data('start') + "").split('-')[1], 10) - 1;
			var timeEndLi = parseInt(($(this).data('end') + "").split('-')[0], 10) * 12 + parseInt(($(this).data('end') + "").split('-')[1], 10);
			
			$(this).width(((timeEndLi - timeStartLi) * 100 / (years * 12)) + "%" );
			$(this).css('left', (timeStartLi - timeStart * 12) * 100 / (years * 12) + "%");
		});
	});
	
	
	//Testimonials
	$('.testimonials').each(function() {
		$(this).height($(this).find('.shown').outerHeight());
	});
	
	$('.testimonials .icon-right-open').click(function() {
		
		var index = ($(this).parent().parent().find('.quote').index($(this).parent().parent().find('.shown')) + 1) % $(this).parent().parent().find('.quote').length;
		$(this).parent().parent().find('.shown').removeClass('shown');
		$(this).parent().parent().find('.quote').eq(index).addClass('shown');
		$(this).parent().parent().height($(this).parent().parent().find('.shown').outerHeight());
	});
	
	$('.testimonials .icon-left-open').click(function() {
		var index = ($(this).parent().parent().find('.quote').index($(this).parent().parent().find('.shown')) - 1 + $(this).parent().parent().find('.quote').length) % $(this).parent().parent().find('.quote').length;
		$(this).parent().parent().find('.shown').removeClass('shown');
		$(this).parent().parent().find('.quote').eq(index).addClass('shown');
		$(this).parent().parent().height($(this).parent().parent().find('.shown').outerHeight());
	});
	
	
	//
	// Porftolio
	//
	var $holder = $('.portfolio');
	var $data = $holder.clone();
	$('.portfolio-full .registred-tags a').click(function() {
		$(this).parent().find('a').removeClass('highlight');
		$(this).addClass('highlight');
		var $filteredData;
		var $filterType = $(this).data('tag');
		if ($filterType === 'all') {
			$filteredData = $data.find('li');
		}
		else {
			$filteredData = $data.find('li[data-tag~=' + $filterType + ']');
		}
		$holder.quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad'
		});
		return false;
	});

	
	
	//
	// Contact form
	//
	// Checking the form data and sending via ajax call
	$('form input[type="submit"]').on('click', function() {
		
		var fname = $('form input[name="fname"]').val();
		var lname = $('form input[name="lname"]').val();
		var email = $('form input[name="email"]').val();
		var phone = $('form input[name="phone"]').val();
		var messg = $('form textarea').val();
		
		var hasError = false;
		var errorMsg = "";
		
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		if(
			fname === null || fname === "" ||
			lname === null || lname === "" ||
			email === null || email === "" ||
			phone === null || phone === "") {
			hasError = true;
			errorMsg = "Please fill all fields. ";
		}
		
		if(!emailReg.test(email) || email === null || email === "") {
			hasError = true;
			errorMsg += "Please enter valid e-mail.";
		}
		
		var dataString = 'fname='+ fname +
		'&lname=' + lname +
		'&email=' + email +
		'&phone=' + phone +
		'&message=' + messg;
		
		if(!hasError) {
			$.ajax({
				type: "POST",
				url: "email.php",
				data: dataString, 
				success: function(){  
					$('#form-message').html('Form successfully submitted.');
				}   
			});
		}
		else {
			$('#form-message').html(errorMsg);
		}
		return false; 
	});
	
	
	//
	// When resized recalculate some values
	//
	$(window).resize(function() {
		
		$('.tab-top').each(function() {
			$(this).parent().height('auto');
			$(this).parent().height($(this).parent().height() + $(this).find('.content').outerHeight());
		});
		
		$('.testimonials').each(function() {
			$(this).height($(this).find('.shown').outerHeight());
		});
		
		$('.toggle .content').each(function() {
			var tr_t = $(this).css('transition'),
			wktr_t = $(this).css('-webkit-transition');
			$(this).css({'tansition': 'none', '-webkit-transition': 'none'});
			
			var hiddenRemoved = false;
			if($(this).hasClass('hidden')) {
				$(this).removeClass('hidden');
				hiddenRemoved = true;
			}
			
			var h = getActualHeight($(this));
			
			if(hiddenRemoved) {
				$(this).addClass('hidden');
			}
			$(this).height(h);
			$(this).css({'tansition': tr_t, '-webkit-transition': wktr_t});
		});
		
		$('.portfolio').each(function() {
			var maxH = 0;
			$(this).find('li').each(function() {
				if(maxH < $(this).height()) {
					maxH = getActualHeight($(this));
				}
			});
			$(this).find('li').height(maxH);
		});
	});
	
	// Toggle (must be last)
	$('.toggle .content').each(function() {
		var tr_t = $(this).css('transition'),
		wktr_t = $(this).css('-webkit-transition');
		$(this).css({'tansition': 'none', '-webkit-transition': 'none'});
		
		var hiddenRemoved = false;
		if($(this).hasClass('hidden')) {
			$(this).removeClass('hidden');
			hiddenRemoved = true;
		}
		
		var h = getActualHeight($(this));
		
		if(hiddenRemoved) {
			$(this).addClass('hidden').height(h);
		}
		
		$(this).css({'tansition': tr_t, '-webkit-transition': wktr_t});
	});
	
	
});