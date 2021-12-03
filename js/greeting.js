const loginBox = document.querySelector('#login-box');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  loginBox.classList.add(HIDDEN_CLASSNAME);

  showOtherTags();
}

function paintGreetings(userName) {
  greeting.innerText = `안녕하세요, ${userName} 님.`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener('submit', onLoginSubmit);

if (savedUserName === null) {
  loginBox.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUserName);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function showOtherTags() {
  loginBox.classList.add(HIDDEN_CLASSNAME);
  weatherBox.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  quoteBox.classList.remove(HIDDEN_CLASSNAME);
}
