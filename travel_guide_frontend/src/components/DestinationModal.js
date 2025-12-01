import Tabs from './Tabs';

// PUBLIC_INTERFACE
export default function DestinationModal({ destination, onClose }) {
  /** Accessible modal with details tabs for a destination. */
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-label', `${destination.name} details`);
  backdrop.tabIndex = -1;

  const modal = document.createElement('div');
  modal.className = 'modal';

  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = document.createElement('div');
  title.className = 'modal-title';
  title.textContent = destination.name;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'icon-btn';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', () => onClose?.());

  header.appendChild(title);
  header.appendChild(closeBtn);

  const tabs = Tabs({
    initial: 'Overview',
    onChange: (name) => renderTab(name),
  });

  const content = document.createElement('div');
  content.className = 'modal-content';

  function renderTab(name) {
    content.innerHTML = '';
    if (name === 'Overview') {
      const p = document.createElement('p');
      p.textContent = destination.description || 'A wonderful place to visit with rich culture and stunning sights.';
      content.appendChild(p);
    } else if (name === 'Highlights') {
      const list = document.createElement('ul');
      (destination.highlights || ['Historic district', 'Local cuisine market', 'Scenic viewpoint']).forEach((h) => {
        const li = document.createElement('li');
        li.textContent = `• ${h}`;
        list.appendChild(li);
      });
      content.appendChild(list);
    } else if (name === 'Tips') {
      const tips = destination.tips || ['Best visited in spring/fall', 'Purchase city pass for attractions', 'Use public transport'];
      tips.forEach((t) => {
        const p = document.createElement('p');
        p.textContent = `• ${t}`;
        content.appendChild(p);
      });
    } else if (name === 'Nearby') {
      const near = destination.nearby || ['Day trip to nearby town', 'National park hike'];
      near.forEach((n) => {
        const p = document.createElement('p');
        p.textContent = `• ${n}`;
        content.appendChild(p);
      });
    }
  }
  renderTab('Overview');

  const body = document.createElement('div');
  body.appendChild(tabs);
  body.appendChild(content);

  modal.appendChild(header);
  modal.appendChild(body);
  backdrop.appendChild(modal);

  function handleEsc(e) {
    if (e.key === 'Escape') {
      onClose?.();
    }
  }
  function handleBackdropClick(e) {
    if (e.target === backdrop) onClose?.();
  }
  /* global setTimeout */
  setTimeout(() => {
    document.addEventListener('keydown', handleEsc);
    backdrop.addEventListener('click', handleBackdropClick);
  });

  // Cleanup when removed
  backdrop.cleanup = () => {
    document.removeEventListener('keydown', handleEsc);
    backdrop.removeEventListener('click', handleBackdropClick);
  };

  return backdrop;
}
