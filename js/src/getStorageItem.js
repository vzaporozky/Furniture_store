export const getStorageItem = (item) => JSON.parse(localStorage.getItem(item));

export const setStorageItem = (item, json) => localStorage.setItem(item, json)