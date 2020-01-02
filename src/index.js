document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function(e){
    let newTaskField = document.getElementById('new-task-description')
    let newTask = newTaskField.value 
    if (newTask){
      e.preventDefault();
      
      let taskList = document.getElementById('tasks');
      
      taskList.appendChild(buildList(newTask));
      
      newTaskField.value = null;
      
    }
  })
});

const deleteButton = 'Delete';

let buildList = (newTask) => {
  let listItem = document.createElement('li');
  listItem.className = newTask.split(' ').join('-');
  listItem.innerHTML = newTask;
  listItem.appendChild(buttonGenerator(newTask, deleteButton));
  return listItem;
}


let buttonGenerator = (newTask, action) => {
  let button = document.createElement('button'); 
  button.innerHTML = action; 
  button.className = `${action}`;
  button.addEventListener('click', function(e) {
    buttonEventCallback(e)
  });
  return button;
}

let deleteListItem = (itemClass) => {
  let lineItem = document.querySelector(`.${itemClass}`);
  lineItem.remove();
}

let buttonEventCallback = (e) => {
  if (e.currentTarget.className.includes(deleteButton)) {
    deleteListItem(e.currentTarget.parentNode.className);
  }
}