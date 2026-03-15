import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build for WordPress theme deploy: output in dist/, base / so theme can enqueue from its assets folder.
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
