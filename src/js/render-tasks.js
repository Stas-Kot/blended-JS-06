import createMarkup from './markup-tasks';
import { refs } from './refs';

export function renderTasks(tasks) {
  refs.list.innerHTML = createMarkup(tasks);
}

export function clearTasksList() {
  refs.list.innerHTML = '';
}
