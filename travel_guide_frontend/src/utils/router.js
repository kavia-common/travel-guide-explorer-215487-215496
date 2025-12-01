/* global window */
export function currentRoute() {
  const hash = window.location.hash || '#/';
  const path = hash.replace(/^#/, '') || '/';
  return path;
}

export function onHashChange(cb) {
  window.addEventListener('hashchange', cb);
}
