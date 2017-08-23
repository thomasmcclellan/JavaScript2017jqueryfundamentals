$(submitButton).click(capitalize);
$(input).keypress(function(e) {
	if(e.keyCode == 13) {
		capitalize();
	}
});



function capitalize() {
	let newName = '';
	for (let n in input.value) {
		if (n == 0) {
			newName = input.value[n].toUpperCase();
		} else {
			newName += input.value[n].toLowerCase();
		}
	}
	input.value = "";
	output.innerHTML = 'Capitalized Name: ' + newName;
	$(friendsList).append('<li>').append(newName);

}