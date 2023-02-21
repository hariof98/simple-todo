window.addEventListener('load', () => {
  if (localStorage.getItem('ToDo')) displayData();
});

function addTodo() {
  let userTodoData = document.querySelector('.todo-item').value;

  if (
    userTodoData == null ||
    userTodoData == '' ||
    !userTodoData.replace(/\s/g, '')
  ) {
    location.reload();
    return;
  }

  let getTodo = localStorage.getItem('ToDo');
  let todoStore;

  if (getTodo != null) {
    let gettTodoStore = JSON.parse(getTodo);
    todoStore = {
      task: userTodoData,
    };
    gettTodoStore.push(todoStore);
    localStorage.setItem('ToDo', JSON.stringify(gettTodoStore));
  } else {
    todoStore = [
      {
        task: userTodoData,
      },
    ];

    localStorage.setItem('ToDo', JSON.stringify(todoStore));
  }
  displayData();
  document.querySelector('.todo-item').value = '';
}

function displayData() {
  let disData = JSON.parse(localStorage.getItem('ToDo'));
  let dataStore = '';

  for (let i = 0; i <= disData.length - 1; i++) {
    dataStore =
      dataStore +
      `<tr>
          <td>${disData[i].task}</td>
          <td>
            <a href="javascript:;" onclick="deleteTodo(${i});">Mark As Complete</a>
          </td>
      </tr>`;
    document.querySelector('.todo-data').innerHTML = dataStore;
  }
}

function deleteTodo(todo) {
  let deleteTodoItem = JSON.parse(localStorage.getItem('ToDo'));
  deleteTodoItem.splice(todo, 1);
  localStorage.setItem('ToDo', JSON.stringify(deleteTodoItem));
  displayData();
}
