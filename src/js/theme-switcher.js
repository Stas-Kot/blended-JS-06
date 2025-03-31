import { STORAGE_KEYS, THEME_OPTION } from './constants';
import { saveToLocalStorage } from './local-storage-api';
import { refs } from './refs';

export function changeTheme() {
  const isDarkTheme = refs.body.classList.contains(THEME_OPTION.DARK);
  if (isDarkTheme) {
    refs.body.classList.replace(THEME_OPTION.DARK, THEME_OPTION.LIGHT);
    saveToLocalStorage(STORAGE_KEYS.THEME, THEME_OPTION.LIGHT);
  } else {
    refs.body.classList.replace(THEME_OPTION.LIGHT, THEME_OPTION.DARK);
    saveToLocalStorage(STORAGE_KEYS.THEME, THEME_OPTION.DARK);
  }
}

export function currentTheme(savedTheme) {
  if (!savedTheme) {
    return;
  }
  refs.body.classList.remove(THEME_OPTION.DARK, THEME_OPTION.DARK);
  refs.body.classList.add(savedTheme);
}
