$(function() {
	$('#example-one').addClass('heighlight');
	$('.example-two').css('border','4px solid gray');
});

$('h5').click(function() {
	$('h5').fadeOut('slow', 'linear');
})

//https://jqueryui.com/draggable/
//$('#daggable').draggable();

$('#id-combo-demo, .class-combo-demo, #draggable').draggable(); 

$('li:contains("sad")').click(function() {
	$(this).hide();
})