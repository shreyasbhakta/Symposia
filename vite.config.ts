import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production root deploy: VITE_DEPLOY_TARGET=root npm run build (or omit; default is root).
// ReactPress only: VITE_DEPLOY_TARGET=reactpress npm run build → base './', outDir build, HashRouter.
const isReactPress = process.env.VITE_DEPLOY_TARGET === 'reactpress';

// https://vitejs.dev/config/
export default defineConfig({
  base: isReactPress ? './' : '/',
  plugins: [react()],
  build: {
    outDir: isReactPress ? 'build' : 'dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
