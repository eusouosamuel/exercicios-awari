export function localStorageAdd(data) {
  localStorage.setItem('usuario', JSON.stringify(data.credential));
}

export function localStorageGet() {
  return JSON.parse(localStorage.getItem('usuario'));
}
