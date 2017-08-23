$(document).ready(function() {
	//animate 
	$("#animate").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		});
	});

	//with time parameter
	$("#animate-time").click(function() {
		$(time)animate({
			"height": "200px",
			"width": "300px"
		}, 4000);
	});

	//with callback
	$("#animate-callback").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		}, 2500, function() {
			$(this).animate({"background-color": "red"});
		});
	});

	//considering defining your callback function earlier in your js file to clean up your code
	function changeColor() {
		$(this).animate({"background-color": "red"});
	}

	/*
	$("#animate-callback").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		}, 2500, changeColor);
	}); */
});