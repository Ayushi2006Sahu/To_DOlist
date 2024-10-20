const todoList = [
    { task: 'Coding', completed: false },
    { task: 'Reading', completed: false }
];

// Function to render the todo list
function renderTodoList() {
    let todoListHTML = '';
    let completedCount = 0;

    for (let i = 0; i < todoList.length; i++) {
        const toDo = todoList[i];
        const taskClass = toDo.completed ? 'completed-task' : '';
        const isChecked = toDo.completed ? 'checked' : '';

        // Template literals with checkboxes for marking tasks as completed
        const html = `
            <div class="task-item">
                <input type="checkbox" onclick="toggleComplete(${i})" ${isChecked}>
                <span class="${taskClass}">${toDo.task}</span>
                <button onclick="editTask(${i})" title="Edit Task">✏️</button>
                <button onclick="deleteTodo(${i})" title="Delete Task">🗑️</button>
            </div>
        `;
        todoListHTML += html;

        // Count completed tasks
        if (toDo.completed) {
            completedCount++;
        }
    }

    // Display the task list
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    // Display the count of completed tasks
    document.querySelector('.js-completed-count').innerHTML = `Completed Tasks: ${completedCount}`;
}

// Function to add a new task
function addtoDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value.trim();

    if (name === '') {
        alert('Please enter a valid To-Do item.');
        return;
    }

    todoList.push({ task: name, completed: false });
    inputElement.value = '';
    renderTodoList();
}

// Function to delete a task
function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

// Function to toggle task completion
function toggleComplete(index) {
    todoList[index].completed = !todoList[index].completed;
    renderTodoList();
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit your task:', todoList[index].task);
    if (newTask !== null && newTask.trim() !== '') {
        todoList[index].task = newTask;
        renderTodoList();
    }
}




// const todoList = ['Coding', 'Coding'];


// function renderTodoList(){
//     let todoListHTML = '';
//     for (let i = 0; i < todoList.length; i++) {
//         const toDo = todoList[i];
//         const html = `<p>${toDo}<button onclick="
//         todoList.splice(${i},1);
//         renderTodoList();
//         ">Delete</button></p>`;
//         todoListHTML += html;
//     } 
//     console.log(todoListHTML);
   
    

//  document.querySelector('.js-todo-list')
//     .innerHTML = todoListHTML;
// }

    

// function addtoDo() {
//     const inputElement = document.querySelector('.js-name-input');
//     const name = inputElement.value;

//     todoList.push(name);
//     console.log(todoList);
//     inputElement.value = '';

//   renderTodoList();
// }
// const todoList = [{
//     name: 'make dinner',
//     dueDate: '2022-12-22'
//   }, {
//     name: 'wash dishes',
//     dueDate: '2022-12-22'
//   }];
  
//   renderTodoList();
  
//   function renderTodoList() {
//     let todoListHTML = '';
  
//     for (let i = 0; i < todoList.length; i++) {
//       const todoObject = todoList[i];
//       //const name = todoObject.name;
//       //const dueDate = todoObject.dueDate;
//       const { name, dueDate } = todoObject;
//       const html = `
//         <div>${name}</div>
//         <div>${dueDate}</div>
//         <button onclick="
//           todoList.splice(${i}, 1);
//           renderTodoList();
//         " class="delete-todo-button">Delete</button> 
//       `;
//       todoListHTML += html;
//     }
  
//     document.querySelector('.js-todo-list')
//       .innerHTML = todoListHTML;
//   }
  
//   function addTodo() {
//     const inputElement = document.querySelector('.js-name-input');
//     const name = inputElement.value;
  
//     const dateInputElement = document.querySelector('.js-due-date-input');
//     const dueDate = dateInputElement.value;
  
//     todoList.push({
//       //name: name,
//       //dueDate: dueDate,
//       name,
//       dueDate
//     });
  
//     inputElement.value = '';
  
//     renderTodoList();
//   }