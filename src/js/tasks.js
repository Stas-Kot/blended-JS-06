import formatDate from './utils';

export function createTask(title, text) {
  const now = new Date();
  const formattedDate = formatDate(now);

  const task = {
    title,
    text,
    id: crypto.randomUUID(),
    createdAt: formattedDate,
  };
  return task;
}
