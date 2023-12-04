import _ from 'lodash';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const buttonLogic = (function() {

  const openAddTaskWindow = () => {
    console.log('test');
  }

  const openAddListWindow = () => {
    console.log('list test')
  }

  const openEditTaskWindow = (event) => {
    console.log(event.currentTarget.position)
  }
  
  const addTodoBtn = document.querySelector('.add-todo-btn');
  addTodoBtn.addEventListener('click', openAddTaskWindow);

  const addListBtn = document.querySelector('.add-list');
  addListBtn.addEventListener('click', openAddListWindow);

  return {openEditTaskWindow};

  

})();


function addTodoDom(position, id, taskTitle, taskDescription, taskDue) {
  const container = document.querySelector('.todo-container');

  const element = document.createElement('div');
  element.classList.add('todo');
  element.classList.add(`${id}`);

  const finished = document.createElement('input');
  finished.type = 'checkbox'
  finished.classList.add('task');
  finished.classList.add('task-check');

  const title = document.createElement('h4');
  title.classList.add('task');
  title.classList.add('task-title');
  title.textContent = taskTitle;

  const description = document.createElement('p');
  description.classList.add('task');
  description.classList.add('task-description');
  description.textContent = taskDescription;

  const due = document.createElement('p');
  due.classList.add('task');
  due.classList.add('task-description');
  due.textContent = taskDue;
  
  const editBtn = document.createElement('button');
  editBtn.classList.add('task');
  editBtn.classList.add('task-btn');
  editBtn.textContent = 'edit';

  editBtn.addEventListener('click', buttonLogic.openEditTaskWindow)
  editBtn.list = todoList.getCurrentPosition;
  editBtn.position = position;

  element.appendChild(finished);
  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(due);
  element.appendChild(editBtn);

  container.appendChild(element);
}

function changeListTitle(listName) {
  const title = document.querySelector('.todo-title');
  title.textContent = listName;
}

function clearDom(){
  // https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
  const elements = document.getElementsByClassName('todo');
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}


const todoList = (function() {
  let todoArray = [];
  let currentPosition = 0;


  // other variables description, date, priority
  const addTodo = (taskName, description, due, priority) => {
    const id = uuidv4();
    const myObj = {"id": id, "name": taskName, "description": description, "due": due, "priority": priority};
    todoArray[currentPosition].push(myObj);
  }

  const getArray = () => {
    console.log(todoArray);
    return todoArray[currentPosition];
  }

  const createNewList = (listName) => {
    currentPosition = todoArray.length;
    todoArray.push([]);
    const id = uuidv4();
    const listObj = {"id": id, "name": listName};
    todoArray[currentPosition].push(listObj)
  }

  const populateDom = () => {
    const currentArray = todoArray[currentPosition];
    const n = currentArray.length;
    const listName = currentArray[0]['name'];
    changeListTitle(listName);
    for (let i = 1; i < n; i++) {
      const currentObj = currentArray[i];
      const id = currentObj['id'];
      const title = currentObj['name'];
      const description = currentObj['description'];
      const due = currentObj['due'];
      addTodoDom(i, id, title, description, due);
    }
  }

  const getCurrentPosition = () => {
    return currentPosition;
  }

  return {addTodo, getArray, populateDom, createNewList, getCurrentPosition};
 })();




todoList.createNewList("list 1");
todoList.addTodo("Laundry", "do the Laundry", "11/17/23", 0);
todoList.addTodo("Dishes", "do the Dishes", "11/14/23", 0);
todoList.getArray();
todoList.populateDom();









// What I need to do


// add a window for adding todolist


// JS Logic
// Button to clear checked items 
// 


// Extras
// dark mode to light mode
// Calendar on the right
