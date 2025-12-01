function StarRating({ rating = 0 }) {
  const span = document.createElement('span');
  span.className = 'rating';
  const rounded = Math.round(rating * 10) / 10;
  span.textContent = `★ ${rounded}`;
  return span;
}

// PUBLIC_INTERFACE
export default function DestinationCard({ item, isFavorite, onFavoriteToggle, onViewGuide }) {
  /** Card showing image, name, region/country and actions. */
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('data-destination-id', item.id);
  card.setAttribute('aria-label', `${item.name} destination`);

  const img = document.createElement('img');
  img.className = 'card-img';
  img.alt = `${item.name} photo`;
  img.src = item.image || `https://picsum.photos/seed/${encodeURIComponent(item.name)}/400/300`;

  const body = document.createElement('div');
  body.className = 'card-body';

  const topRow = document.createElement('div');
  topRow.style.display = 'flex';
  topRow.style.justifyContent = 'space-between';
  topRow.style.alignItems = 'center';
  const name = document.createElement('h3');
  name.textContent = item.name;
  name.style.fontWeight = '800';

  const favBtn = document.createElement('button');
  favBtn.className = 'icon-btn';
  favBtn.setAttribute('data-fav-btn', '1');
  favBtn.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
  favBtn.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
  favBtn.innerHTML = isFavorite ? '★' : '☆';
  if (isFavorite) favBtn.classList.add('is-favorite');
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    onFavoriteToggle?.(item.id);
    const pressed = favBtn.getAttribute('aria-pressed') === 'true';
    const newPressed = !pressed;
    favBtn.setAttribute('aria-pressed', newPressed ? 'true' : 'false');
    favBtn.classList.toggle('is-favorite', newPressed);
    favBtn.innerHTML = newPressed ? '★' : '☆';
  });

  topRow.appendChild(name);
  topRow.appendChild(favBtn);

  const sub = document.createElement('div');
  sub.style.display = 'flex';
  sub.style.gap = '.5rem';
  const region = document.createElement('span');
  region.className = 'badge';
  region.textContent = item.country ? `${item.country}${item.region ? ' • ' + item.region : ''}` : (item.region || '—');
  const rating = StarRating({ rating: item.rating || 4.5 });
  sub.appendChild(region);
  sub.appendChild(rating);

  const actions = document.createElement('div');
  actions.style.marginTop = '.5rem';
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'View Guide';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    onViewGuide?.(item);
  });
  actions.appendChild(btn);

  body.appendChild(topRow);
  body.appendChild(sub);
  body.appendChild(actions);

  card.appendChild(img);
  card.appendChild(body);
  return card;
}
