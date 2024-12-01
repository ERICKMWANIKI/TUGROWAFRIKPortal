import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration using defineConfig
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Port where your proxyServer.js runs
        changeOrigin: true,
        secure: false,
      },
    },
  },
});