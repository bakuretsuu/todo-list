export function getUserInput (){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').checked;
    let notes = document.getElementById('notes').value;
    let id = crypto.randomUUID();

    return {title, description, dueDate, priority, notes, id}
}

export function displayTask (){
    
}