const inpTasks = document.querySelector('#inp-tasks');
const btnTasks = document.querySelector('.btn-tasks');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

// inpTasks.addEventListener('keypress', function(e) {
//     if (e.keyCode === 13) {
//         if (!inpTasks.value) return;
//         createTask(inpTasks.value);
//     }
// });

function createDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete')
    li.appendChild(deleteButton);
}

function cleanInput() {
    inpTasks.value = '';
    inpTasks.focus();
}

function createTask(task) {
    const li = createLi();
    li.innerText = task;
    tasks.appendChild(li);
    cleanInput();
    createDeleteButton(li);
    saveTask();
}

btnTasks.addEventListener('click', function(e) {
    e.preventDefault();
    if (!inpTasks.value) return;
    createTask(inpTasks.value);
});

function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Delete', '').trim();
        listTasks.push(textTask);
    }

    const tasksJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJSON);
}


document.addEventListener('click', function(e) {
    const el = e.target;
    if  (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTask();
    }
});
  
function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for (let task of listTasks) {
        createTask(task);
    }
}

addSavedTasks();