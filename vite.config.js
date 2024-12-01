import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  // Configure fallback for SPA
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  // Serve index.html for unknown routes
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});
