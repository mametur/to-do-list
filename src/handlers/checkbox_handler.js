const selectCheckBox = (event) => {
	const target = event.target;

	if (target.nodeName !== 'INPUT') {
		return;
	}

	app.toggleCompleted(target.id);

	/*logger */

	logger.push({
		action: 'toggleCompleted',
		event: event,
		todoIndex: target.id,
		state: app.todayState,
	});

	console.log(logger.logs);
};
