export default function Hero() {
  const wrapper = document.createElement('section');
  wrapper.className = 'hero ocean-gradient';
  wrapper.setAttribute('aria-label', 'Landing hero');

  const inner = document.createElement('div');
  inner.className = 'hero-inner';

  const title = document.createElement('h1');
  title.className = 'hero-title';
  title.textContent = 'Discover your next adventure';

  const sub = document.createElement('p');
  sub.className = 'hero-sub';
  sub.textContent =
    'Browse curated travel guides, see highlights and tips, and plan an unforgettable trip.';

  const cta = document.createElement('div');
  cta.className = 'hero-cta';

  const exploreBtn = document.createElement('a');
  exploreBtn.href = '#/';
  exploreBtn.className = 'btn';
  exploreBtn.textContent = 'Explore destinations';

  const planBtn = document.createElement('a');
  planBtn.href = '#/itinerary';
  planBtn.className = 'btn secondary';
  planBtn.textContent = 'Open itinerary';

  cta.appendChild(exploreBtn);
  cta.appendChild(planBtn);

  inner.appendChild(title);
  inner.appendChild(sub);
  inner.appendChild(cta);

  wrapper.appendChild(inner);
  return wrapper;
}
