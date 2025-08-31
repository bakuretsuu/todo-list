import { storeTasks, getTasks } from './storage.js';

export function Task(title, description, dueDate, priority, notes, id) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.id = id;
}

let myTasks = getTasks();

export function addTask(taskData) {
  let newTask = new Task(
    taskData.title,
    taskData.description,
    taskData.dueDate,
    taskData.priority,
    taskData.notes,
    taskData.id
  );
  myTasks.push(newTask);
  storeTasks(myTasks);
}

export function removeTask(id) {
  myTasks.splice(myTasks.findIndex(task => task.id === id), 1);
  storeTasks(myTasks);
}

export function getTasksList() {
  return myTasks;
}
