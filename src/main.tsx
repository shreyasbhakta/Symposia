import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { getWordPressBaseUrl } from './config/site';

// Favicon from WordPress media (VITE_WORDPRESS_URL)
const faviconHref = `${getWordPressBaseUrl()}/wp-content/uploads/2025/04/cropped-Community-Bookstore.jpg`;
document.querySelectorAll('link[data-wp-favicon]').forEach((el) => {
  (el as HTMLLinkElement).href = faviconHref;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
