/*User Today Input */

const getUserTodayList = (event) => {
	event.preventDefault();
	/*get user input */
	const userInput = document.getElementById('text-today').value;

	if (userInput.trim() === '') {
		return alert('input can not be empty');
	}

	app.addTodayList = { text: userInput, completed: false };
	const logEntry = {
		action: 'Add To Do Today',
		_stateToday: app.todaySate,
	};
	/*Remove all childs */
	logger.push(logEntry);

	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	const tableElement = document.getElementById('placeList');

	removeAllChildNodes(tableElement);
	tableElement.appendChild(renderTodos(app.todayList));

	console.log(logger.logs);
};

/* User Week Input*/

const getUserWeekList = (event) => {
	event.preventDefault();
	/*get user input */
	const userInput = document.getElementById('text-week').value;

	if (userInput.trim() === '') {
		return alert('input can not be empty');
	}
	alert(userInput);
};
