import { getTasks, removeTask } from "./todo.js";

export function displayTask() {
  const taskContainer = document.querySelector('.taskList');
  taskContainer.innerHTML = '';

  getTasks().forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('taskItem');

    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority ? 'High' : 'Normal'}</p>
      <p>Notes: ${task.notes}</p>
      <button data-id="${task.id}" class="removeTask">Remove</button>
    `;

    
    taskDiv.querySelector('.removeTask').addEventListener('click', () => {
      removeTask(task.id);
      displayTask(); 
    });

    taskContainer.appendChild(taskDiv);
  });
}

export function domControl (){
  document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector('dialog');
    const closeBtn = document.querySelector('.closeBtn');
    const form = document.querySelector('#taskForm');
    const openBtn = document.querySelector('#addToDo');
    
    openBtn.addEventListener('click', () => {
      dialog.showModal();
    });
  
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      // grab input values
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('dueDate').value;
      const priority = document.getElementById('priority').checked;
      const notes = document.getElementById('notes').value;
      const id = crypto.randomUUID();

      // call addTask from todo.js
      addTask({ title, description, dueDate, priority, notes, id });

      // update UI
      displayTask();
      form.reset();
      dialog.close();
    });
  });
}