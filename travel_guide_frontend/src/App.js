import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import DestinationsGrid from './components/DestinationsGrid';
import DestinationModal from './components/DestinationModal';
import ItineraryPage from './pages/ItineraryPage';
import { getAllDestinations } from './services/api';
import { loadFavorites, saveFavorites } from './utils/storage';
import { onHashChange, currentRoute } from './utils/router';

// Simple state for the whole app (since no framework beyond vanilla + components)
const state = {
  destinations: [],
  filtered: [],
  favorites: loadFavorites(),
  selected: null,
  query: '',
  modalOpen: false,
};

function applySearchFilter() {
  const q = state.query.trim().toLowerCase();
  if (!q) {
    state.filtered = [...state.destinations];
    return;
  }
  state.filtered = state.destinations.filter((d) => {
    const text = `${d.name} ${d.country || ''} ${d.region || ''}`.toLowerCase();
    return text.includes(q);
  });
}

function updateFavoritesUI() {
  // update any favorite badges in cards
  document.querySelectorAll('[data-destination-id]').forEach((el) => {
    const id = el.getAttribute('data-destination-id');
    const favBtn = el.querySelector('[data-fav-btn]');
    if (favBtn) {
      const isFav = state.favorites.includes(id);
      favBtn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
      favBtn.classList.toggle('is-favorite', isFav);
      favBtn.title = isFav ? 'Remove from favorites' : 'Add to favorites';
    }
  });
}

function renderHome(container) {
  container.innerHTML = '';
  container.appendChild(Hero());
  container.appendChild(
    SearchBar({
      initialValue: state.query,
      onChange: (q) => {
        state.query = q;
        applySearchFilter();
        renderGrid();
      },
    })
  );

  const gridWrapper = document.createElement('div');
  gridWrapper.id = 'grid-wrapper';
  container.appendChild(gridWrapper);

  function onFavoriteToggle(id) {
    const exists = state.favorites.includes(id);
    if (exists) {
      state.favorites = state.favorites.filter((x) => x !== id);
    } else {
      state.favorites.push(id);
    }
    saveFavorites(state.favorites);
    updateFavoritesUI();
  }

  function onViewGuide(dest) {
    state.selected = dest;
    state.modalOpen = true;
    renderModal();
  }

  function renderModal() {
    const modalMountId = 'destination-modal-mount';
    let modalMount = document.getElementById(modalMountId);
    if (!modalMount) {
      modalMount = document.createElement('div');
      modalMount.id = modalMountId;
      document.body.appendChild(modalMount);
    }
    modalMount.innerHTML = '';
    if (state.modalOpen && state.selected) {
      modalMount.appendChild(
        DestinationModal({
          destination: state.selected,
          onClose: () => {
            state.modalOpen = false;
            state.selected = null;
            renderModal();
          },
        })
      );
    }
  }

  function renderGrid() {
    const mount = document.getElementById('grid-wrapper');
    mount.innerHTML = '';
    mount.appendChild(
      DestinationsGrid({
        items: state.filtered,
        favorites: state.favorites,
        onFavoriteToggle,
        onViewGuide,
      })
    );
    updateFavoritesUI();
  }

  applySearchFilter();
  renderGrid();
}

function renderItinerary(container) {
  container.innerHTML = '';
  container.appendChild(ItineraryPage());
}

function renderRoute() {
  const appMain = document.getElementById('app-main');
  const route = currentRoute();
  if (route === '/itinerary') {
    renderItinerary(appMain);
  } else if (route === '/favorites') {
    // Render favorites filtered grid
    appMain.innerHTML = '';
    const favSet = new Set(state.favorites);
    const favItems = state.destinations.filter((d) => favSet.has(d.id));
    const title = document.createElement('h2');
    title.className = 'page-title';
    title.textContent = 'Your Favorites';
    appMain.appendChild(title);
    const gridWrapper = document.createElement('div');
    appMain.appendChild(gridWrapper);

    function onFavoriteToggle(id) {
      const exists = state.favorites.includes(id);
      state.favorites = exists
        ? state.favorites.filter((x) => x !== id)
        : [...state.favorites, id];
      saveFavorites(state.favorites);
      renderRoute(); // re-render this page to reflect removal
    }
    function onViewGuide(dest) {
      state.selected = dest;
      state.modalOpen = true;
      renderModal();
    }
    function renderModal() {
      const modalMountId = 'destination-modal-mount';
      let modalMount = document.getElementById(modalMountId);
      if (!modalMount) {
        modalMount = document.createElement('div');
        modalMount.id = modalMountId;
        document.body.appendChild(modalMount);
      }
      modalMount.innerHTML = '';
      if (state.modalOpen && state.selected) {
        modalMount.appendChild(
          DestinationModal({
            destination: state.selected,
            onClose: () => {
              state.modalOpen = false;
              state.selected = null;
              renderModal();
            },
          })
        );
      }
    }

    gridWrapper.appendChild(
      DestinationsGrid({
        items: favItems,
        favorites: state.favorites,
        onFavoriteToggle,
        onViewGuide,
      })
    );
  } else {
    renderHome(appMain);
  }
}

export default function App() {
  const app = document.createElement('div');
  app.id = 'app-root';
  app.className = 'bg-app min-h-screen';

  // Nav
  const navContainer = document.createElement('div');
  navContainer.id = 'nav-container';
  navContainer.appendChild(
    NavBar({
      onNavigate: (path) => {
        window.location.hash = `#${path}`;
      },
    })
  );
  app.appendChild(navContainer);

  // Main content container
  const main = document.createElement('main');
  main.id = 'app-main';
  main.className = 'container';
  app.appendChild(main);

  // Load data then render
  getAllDestinations()
    .then((data) => {
      state.destinations = data;
      applySearchFilter();
      renderRoute();
    })
    .catch(() => {
      // Already handled in service mock; still render empty state
      renderRoute();
    });

  // Routing
  /* global window */
  window.addEventListener('hashchange', renderRoute);
  onHashChange(renderRoute);

  return app;
}
