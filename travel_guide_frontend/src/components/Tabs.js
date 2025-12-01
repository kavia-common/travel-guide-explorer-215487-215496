const TABS = ['Overview', 'Highlights', 'Tips', 'Nearby'];

// PUBLIC_INTERFACE
export default function Tabs({ initial = 'Overview', onChange }) {
  /** Simple tabs controller; emits onChange(name) */
  const wrapper = document.createElement('div');
  wrapper.className = 'tabs';

  const createBtn = (name) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', name === initial ? 'true' : 'false');
    btn.textContent = name;
    btn.addEventListener('click', () => {
      wrapper.querySelectorAll('.tab-btn').forEach((b) => b.setAttribute('aria-selected', 'false'));
      btn.setAttribute('aria-selected', 'true');
      onChange?.(name);
    });
    return btn;
  };

  TABS.forEach((t) => wrapper.appendChild(createBtn(t)));
  return wrapper;
}
