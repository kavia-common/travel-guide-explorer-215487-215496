const KEY = 'travel-guide-favorites';

// PUBLIC_INTERFACE
/* global localStorage */
export function loadFavorites() {
  /** Load favorite destination IDs from localStorage */
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// PUBLIC_INTERFACE
export function saveFavorites(ids) {
  /** Save favorite destination IDs to localStorage */
  try {
    localStorage.setItem(KEY, JSON.stringify(ids || []));
  } catch {
    // ignore
  }
}
