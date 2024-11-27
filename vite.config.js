import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://quicksms.advantasms.com', // QuickSMS API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};