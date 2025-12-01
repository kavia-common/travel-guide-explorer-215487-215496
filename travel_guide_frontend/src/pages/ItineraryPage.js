export default function ItineraryPage() {
  const section = document.createElement('section');
  section.className = 'container surface';
  section.style.padding = '1rem';

  const title = document.createElement('h2');
  title.className = 'page-title';
  title.textContent = 'Itinerary (Coming soon)';

  const msg = document.createElement('p');
  msg.textContent =
    'Plan your trip by adding destinations and activities. This section will allow scheduling and sharing itineraries.';
  section.appendChild(title);
  section.appendChild(msg);

  return section;
}
