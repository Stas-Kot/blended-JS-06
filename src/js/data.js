import { STORAGE_KEYS, THEME_OPTION } from './constants';
import { loadFromLocalStorage } from './local-storage-api';

export let tasksArray = loadFromLocalStorage(STORAGE_KEYS.TASKS) || [];
export let theme = loadFromLocalStorage(STORAGE_KEYS.THEME);
