import DestinationCard from './DestinationCard';

// PUBLIC_INTERFACE
export default function DestinationsGrid({ items = [], favorites = [], onFavoriteToggle, onViewGuide }) {
  /** Grid list of destination cards */
  const section = document.createElement('section');
  section.className = 'container';

  const grid = document.createElement('div');
  grid.className = 'grid';
  section.appendChild(grid);

  if (!items.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No destinations found. Try a different search.';
    empty.style.padding = '1rem';
    section.appendChild(empty);
    return section;
  }

  const favSet = new Set(favorites || []);
  items.forEach((item) => {
    const card = DestinationCard({
      item,
      isFavorite: favSet.has(item.id),
      onFavoriteToggle,
      onViewGuide,
    });
    grid.appendChild(card);
  });

  return section;
}
