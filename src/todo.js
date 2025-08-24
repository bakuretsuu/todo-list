export function Task(title, description, dueDate, priority, notes, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.id = id;
  }

export function taskList(){
  let myTasks = [];

  const addTask = (taskData) => {
    let newTask = new Task(taskData.title, taskData.description, taskData.dueDate, taskData.priority, taskData.notes, taskData.id);
    myTasks.push(newTask);
  }

  const removeTask = (id) => {
    myTasks.splice(myTasks.findIndex(task => task.id === id),1);
  }
  return {addTask,removeTask, myTasks};
};

