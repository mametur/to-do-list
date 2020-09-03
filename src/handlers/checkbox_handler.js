const selectCheckBox = (event) => {
	const target = event.target;

	if (target.nodeName !== 'INPUT') {
		return;
	}

	app.toggleCompleted(target.id);
};
