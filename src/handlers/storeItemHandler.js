/*User Today Input */

const getUserTodayList = (event) => {
	event.preventDefault();
	/*get user input */
	const userInput = document.getElementById('text-today').value;
	alert(userInput);
};

/* User Week Input*/

const getUserWeekList = (event) => {
	event.preventDefault();
	/*get user input */
	const userInput = document.getElementById('text-week').value;
	alert(userInput);
};
