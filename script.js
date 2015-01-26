$(document).ready(function() {
	for(var i = 0; i < 256; i++) {
		if((i + 1) % 16){													// if i is not a multiple of 16
			$("#maincontainer").append("<div class=\"squares\"></div>");	// create a div

		} else {															// else
			$("#maincontainer").append("<br>");								// add a break			
		}
	}

	$('#maincontainer div').hover(function() {
			$(this).addClass('hover_class');								// toggle hover_class css
		});

	$('button').click(function() {
			$('#maincontainer div').removeClass('hover_class');
	});

})