export default function createMarkup(arr) {
  return arr
    .map(
      obj => `<li class="task-list-item" data-id="${obj.id}">
      <div class="wrapper"><span class="date-of-creation">Created: ${obj.createdAt}</span>
      <button class="task-list-item-btn">Delete</button></div>
      <h3>${obj.title}</h3>
      <p>${obj.text}</p>
  </li>`
    )
    .join('');
}
