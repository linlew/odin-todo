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

  const openEditTaskWindow = () => {
    
  }
  
  const addTodoBtn = document.querySelector('.add-todo-btn');
  addTodoBtn.addEventListener('click', openAddTaskWindow);

  const addListBtn = document.querySelector('.add-list');
  addListBtn.addEventListener('click', openAddListWindow);

})();



function addTodoDom(id, taskTitle) {
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
  
  const editBtn = document.createElement('button');
  editBtn.classList.add('task');
  editBtn.classList.add('task-btn');
  editBtn.textContent = 'edit';

  element.appendChild(finished);
  element.appendChild(title);
  element.appendChild(editBtn);

  container.appendChild(element);
}




 function todoList(name) {
  let todoArray = [];

  const listName = name;

  // other variables description, date, priority
  const addTodo = (taskName) => {
    const id = uuidv4();
    const myObj = {"id": id, "name": taskName};
    todoArray.push(myObj);
  }

  const getArray = () => {
    console.log(todoArray);
  }

  const populateDom = () => {
    const n = todoArray.length;
    for (let i = 0; i < n; i++) {
      const currentObj = todoArray[i];
      const id = currentObj['id'];
      const title = currentObj['name']
      addTodoDom(id, title);
    }
  }

  return {listName, addTodo, getArray, populateDom};
 }


 const testTodo = todoList("Test Todo");

 testTodo.addTodo("Laundry");
 testTodo.addTodo("Dishes");
 testTodo.getArray();
 
console.log(testTodo.listName);

addTodoDom(1234, 'test');

testTodo.populateDom();







// What I need to do


// Dom related Stuff
// initialize the buttons while populating the page
// add a window for adding todolist


// JS Logic
// Edit a todo item
// Button to clear checked items 
// 


// Extras
// dark mode to light mode
// Calendar on the right
