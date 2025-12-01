export function debounce(fn, delay = 300) {
  /* global clearTimeout, setTimeout */
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  };
}
