import mock from '../data/mockDestinations';

// PUBLIC_INTERFACE
export async function getAllDestinations() {
  /** Returns a list of destinations either from an API (if configured) or from local mock data.
   * It respects VITE_API_BASE and VITE_BACKEND_URL env variables for the base URL.
   */
  const base = import.meta.env?.VITE_API_BASE || import.meta.env?.VITE_BACKEND_URL || '';
  // If no base configured, return mock data
  if (!base) {
    return Promise.resolve(mock);
  }

  // Placeholder: attempt fetch from `${base}/destinations` but do not hardcode endpoints beyond base usage
  // TODO: When backend API is ready, update path and data mapping accordingly.
  try {
    /* global URL, window, fetch */
    const url = new URL(base, window.location.origin);
    // Using a conservative default path that backend can align later. If not available, fallback to mock.
    url.pathname = (url.pathname?.replace(/\/+$/, '') || '') + '/destinations';
    const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    // Expecting an array; if not, fallback
    if (!Array.isArray(data)) throw new Error('Unexpected payload');
    return data;
  } catch {
    // Fallback to mock data to ensure UI works without backend
    return mock;
  }
}
