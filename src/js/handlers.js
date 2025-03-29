import { STORAGE_KEYS } from './constants';
import { tasksArray } from './data';
import { saveToLocalStorage } from './local-storage-api';
import { renderTasks } from './render-tasks';
import { createTask } from './tasks';

export function handleSubmitClick(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  const title = taskName.value.trim();
  const text = taskDescription.value.trim();

  if (!title || !text) {
    alert('You must fill in the "Title" and "Description" fields');
    return;
  }

  const task = createTask(title, text);
  tasksArray.push(task);
  saveToLocalStorage(STORAGE_KEYS.TASKS, tasksArray);
  renderTasks(tasksArray);
  event.target.reset();
}

export function handleDeleteClick(e) {
  if (!e.target.classList.contains('task-list-item-btn')) {
    return;
  }
  const parent = e.target.closest('.task-list-item');
  const taskId = parent.dataset.id;
  const taskIndex = tasksArray.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasksArray.splice(taskIndex, 1);
    saveToLocalStorage(STORAGE_KEYS.TASKS, tasksArray);
    renderTasks(tasksArray);
  }
}

export function handleDOMContentLoaded() {
  renderTasks(tasksArray);
}
