const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = document.querySelector('#todo-form input');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function drawStrikethrough(event) {
  const span = event.target.nextSibling;
  const checked = event.target.checked;
  const liId = parseInt(event.target.parentElement.id);

  if (checked) {
    toDos.map((toDo) => {
      if (toDo.id === liId) {
        toDo.checked = true;
      }
    });
    span.classList.add('done');
  } else {
    toDos.map((toDo) => {
      if (toDo.id === liId) {
        toDo.checked = false;
      }
    });
    span.classList.remove('done');
  }
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;

  const input = document.createElement('input');
  input.type = 'checkbox';

  const span = document.createElement('span');
  span.innerText = newToDo.text;

  input.addEventListener('change', drawStrikethrough);

  if (newToDo.checked) {
    input.checked = true;
    span.classList.add('done');
  }

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    checked: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedUserName !== null) {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}
