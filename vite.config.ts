import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@api': path.resolve(__dirname, './src/api'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.VITE_BASE_PATH || '/weather-app',
});
