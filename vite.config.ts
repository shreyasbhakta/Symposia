import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so assets load when app is served from WordPress path (ReactPress)
  base: './',
  plugins: [react()],
  // ReactPress expects output in a folder named "build"
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
