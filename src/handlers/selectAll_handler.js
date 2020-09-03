const selectAll = (event) => {
	/*first check checkbox status */
	const target = event.target;

	if (app.todayList.length == 0) {
		return;
	}
	if (target.checked) {
		for (const doChecked of app.todayList) {
			doChecked.completed = true;
		}
		const tableElement = document.getElementById('placeList');

		removeAllChildNodes(tableElement);
		tableElement.appendChild(renderTodos(app.todayList));

		logger.push({
			action: 'SelectAll',
			event: event,
			state: app.todayState,
		});

		console.log(logger.logs);
	} else {
		for (const doChecked of app.todayList) {
			doChecked.completed = false;
		}
		const tableElement = document.getElementById('placeList');

		removeAllChildNodes(tableElement);
		tableElement.appendChild(renderTodos(app.todayList));

		logger.push({
			action: 'UnSelectAll',
			event: event,
			state: app.todayState,
		});
		console.log(logger.logs);
	}
};
