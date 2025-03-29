export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
  const saved = localStorage.getItem(key);
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.log(error);
    return saved;
  }
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
