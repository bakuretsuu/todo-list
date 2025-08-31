
export function storeTasks(tasks){
    const taskData = JSON.stringify(tasks)
    localStorage.setItem('tasks', taskData)
}

export function getTasks(){
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
}