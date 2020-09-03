/*remove todo */

const removeTodo = (event) => {
	const target = event.target;

	if (target.tagName !== 'I') {
		return;
	}
	const text = app.getTodayRemovedText(target.dataset.index);
	app.removeTodayTodo(Number(target.dataset.index));

	logger.push({
		action: 'remove todo Today',
		event: event,
		index: target.dataset.index,
		removedText: text,
		state: app.todayState,
	});
	// refresh list//
	const tableElement = document.getElementById('placeList');
	removeAllChildNodes(tableElement);
	tableElement.appendChild(renderTodos(app.todayList));

	console.log(logger.logs);
};
