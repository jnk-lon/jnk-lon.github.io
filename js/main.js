function askQuestions() {

	var firstName = prompt('what  is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + ' ' + lastName
	console.log(fullName);


	var age = prompt('How old are you?');
	age = parseInt(age);


	if (age >=18) {
		console.log('user is an adult');
	} else if (age >=13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() ==='general' && lastName.toLowerCase()!='assembly') {
		console.log('Welcome, General!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour === 'red'||
		faveColour === 'green'||
		faveColour === 'blue'||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

}





// When the page has loaded
$(function () {

	$('img').on('click', askQuestions);

	// When the user clicks a heading 3
	$('h3').on('click', function () {

		//Hide the next element
		$(this).next().slideToggle();

	});

});