import { currentRoute } from '../utils/router';

// PUBLIC_INTERFACE
export default function NavBar({ onNavigate }) {
  /** Navigation bar with brand and links.
   * - onNavigate(path: string) -> void
   */
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');
  const inner = document.createElement('div');
  inner.className = 'nav-inner';

  const brand = document.createElement('div');
  brand.className = 'brand';
  brand.textContent = 'Travel Guide Explorer';

  const links = document.createElement('div');
  links.className = 'nav-links';

  const mkLink = (label, path) => {
    const a = document.createElement('a');
    a.href = `#${path}`;
    a.textContent = label;
    a.className = 'nav-link';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate?.(path);
      updateActive();
    });
    return a;
  };

  const explore = mkLink('Explore', '/');
  const favorites = mkLink('Favorites', '/favorites');
  const itinerary = mkLink('Itinerary', '/itinerary');

  links.appendChild(explore);
  links.appendChild(favorites);
  links.appendChild(itinerary);

  inner.appendChild(brand);
  inner.appendChild(links);
  nav.appendChild(inner);

  function updateActive() {
    const route = currentRoute();
    [explore, favorites, itinerary].forEach((a) => a.classList.remove('active'));
    if (route === '/favorites') favorites.classList.add('active');
    else if (route === '/itinerary') itinerary.classList.add('active');
    else explore.classList.add('active');
  }
  updateActive();
  /* global window */
  window.addEventListener('hashchange', updateActive);

  return nav;
}
