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
