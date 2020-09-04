const selectCheckBox = (event) => {
	const target = event.target;

	if (target.type !== 'checkbox') {
		return;
	}

	app.toggleCompleted(target.id);
	const tableElement = document.getElementById('placeList');

	removeAllChildNodes(tableElement);
	tableElement.appendChild(renderTodos(app.todayList));

	/*logger */
	logger.push({
		action: 'toggleCompleted',
		event: event,
		todoIndex: target.id,
		state: app.todayState,
	});

	console.log(logger.logs);
};
