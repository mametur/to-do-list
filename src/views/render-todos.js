const renderTodos = (todosArr) => {
  const ulEl = document.createElement('ul');

  for (const todo of todosArr) {
    const liEl = document.createElement('li');

    const checkBoxEl = document.createElement('input');
    checkBoxEl.type = 'checkbox';
    if (todo.completed) {
      checkBoxEl.checked = true;
    }
    checkBoxEl.id = todosArr.indexOf(todo);
    liEl.appendChild(checkBoxEl);

    liEl.innerHTML += todo.text;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
