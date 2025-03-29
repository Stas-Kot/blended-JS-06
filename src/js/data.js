import { STORAGE_KEYS } from './constants';
import { loadFromLocalStorage } from './local-storage-api';

export let tasksArray = loadFromLocalStorage(STORAGE_KEYS.TASKS) || [];
