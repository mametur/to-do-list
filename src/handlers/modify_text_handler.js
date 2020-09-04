const modifyText = (event) => {
	const target = event.target;

	if (target.id === 'modify') {
		const inputEl = document.createElement('input');
		inputEl.value = app.todayList[target.dataset.index].text;
		inputEl.id = 'getInput';
		app.cloneElement = target.cloneNode(true);
		target.replaceWith(inputEl);
	} else if ((target.id = 'getInput')) {
		const newText = document.getElementById('getInput').value;
		app.replaceCloneElement.innerHTML = newText;
		target.replaceWith(app.replaceCloneElement);
		app.todayList[app.replaceCloneElement.dataset.index].text = newText;

		/*logger */
		logger.push({
			action: 'modify text',
			event: event,
			todoIndex: target.id,
			state: app.todayState,
		});

		console.log(logger.logs);
	}
};
