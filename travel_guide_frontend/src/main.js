import './styles/theme.css';
import './styles/global.css';
import App from './App';

// Initialize application root without extra libraries
const rootEl = document.getElementById('app');
rootEl.setAttribute('role', 'application');
rootEl.setAttribute('aria-label', 'Travel Guide Explorer');

// Render the SPA into #app
rootEl.innerHTML = '';
rootEl.appendChild(App());
