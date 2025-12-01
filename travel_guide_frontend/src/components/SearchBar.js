import { debounce } from '../utils/debounce';

// PUBLIC_INTERFACE
export default function SearchBar({ initialValue = '', onChange }) {
  /** Search input with debounce; calls onChange(query) */
  const section = document.createElement('section');
  section.className = 'container';
  section.setAttribute('aria-label', 'Search');

  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'search';
  input.placeholder = 'Search destinations, countries, regions...';
  input.value = initialValue;
  input.setAttribute('aria-label', 'Search destinations');

  const handler = debounce((e) => {
    onChange?.(e.target.value || '');
  }, 300);

  input.addEventListener('input', handler);
  section.appendChild(input);
  return section;
}
