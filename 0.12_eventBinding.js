$(document).ready(function() {
	//binding an event with on
	//'click' is one type of event
	$("#on li").on("click", function() {
		//this selects the li that was clicked
		$(this).hide();
	})

	//using off to unbind an event
	$("#off li").on("click", function() {
		//this seelcts the li that was clicked
		$(this).hide();
		$("#off li").off("click");
	})
});