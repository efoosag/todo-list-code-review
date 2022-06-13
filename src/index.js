// import _ from 'lodash';
import './style.css';

const loadTask = document.querySelector('.load-task');
// const addTask = document.querySelector('.add-task');
// const clearAll = document.querySelector('clear-all');

// let taskIndex = '';
let taskDescription = '';
let taskCompleted = '';

const tasks = [
  { index: 1, description: 'Cooking', completed: false },
  { index: 2, description: 'Sleepig', completed: false },
  { index: 3, description: 'Go for Shoppig', completed: true },
  { index: 4, description: 'Go For Exercise', completed: false },
];

const loadPage = () => {
  const li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'justify-content-between',
    'd-flex',
    // eslint-disable-next-line comma-dangle
    'align-items-center'
  );
  li.innerHTML = `<div class="form-check">
<label class="form-check-label">
  <input class="checkbox" type="checkbox" ${taskCompleted}/>
  <span class="ps-3"
    >${taskDescription}</span
  >
</label>
</div>
<i class="fa fa-trash-o"></i>`;
  loadTask.append(li);
};

tasks.forEach((task) => {
  if (task.completed === true) {
    taskCompleted = 'checked';
  } else {
    taskCompleted = '';
  }
  taskDescription = task.description;
  loadPage();
});
