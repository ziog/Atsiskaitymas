import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',  
  plugins: [react()],
  build: {
    outDir: 'dist',  
  },
  server: {
    open: true,  
    port: 3001,  
  },
});
