/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import {
  handleSubmitClick,
  handleDeleteClick,
  handleDOMContentLoaded,
  handleChangeTheme,
} from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
refs.list.addEventListener('click', handleDeleteClick);
refs.form.addEventListener('submit', handleSubmitClick);
refs.changeThemeBtn.addEventListener('click', handleChangeTheme);
