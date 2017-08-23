$(document).ready(function() {
	//adding
	let content = "I am adding stuff using jQuery only";
	$("#divText").text(content);

	//change color
	$("#styled").css("color", "red");

	//adding to children
	$("adding-class").addClass("newClass");
});