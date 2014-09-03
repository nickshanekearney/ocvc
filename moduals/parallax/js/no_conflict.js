	<script>
			$.noConflict();
			jQuery( document ).ready(function( $ ) {
			 
			
			
			$(document).ready(function(){
		$('.parallax_one-bg').parallax("50%", .2);
		$('.parallax_two-bg').parallax("50%", 0.2);
		$('.parallax_three-bg').parallax("50%", .3); 				
	 
	});
	
			
			
				
				$(document).ready(function(){
	
				// hide #back-top first
				$("#back-top").hide();
				
				// fade in #back-top
				$(function () {
					$(window).scroll(function () {
						if ($(this).scrollTop() > 100) {
							$('#back-top').fadeIn();
						} else {
							$('#back-top').fadeOut();
						}
					});
			
					// scroll body to 0px on click
					$('#back-top a').click(function () {
						$('body,html').animate({
							scrollTop: 0
						}, 800);
						return false;
					});
				});
			
			});
				
			
			
			
			// smoth scrool
			
			$(window).load(function(){
			$('a').click(function(){
			$('html, body').animate({
			    scrollTop: $( $(this).attr('href') ).offset().top
			}, 500);
			return false;
			});
			});
			
			
			});
			// Code that uses other library's $ can follow here.	
		</script>
		