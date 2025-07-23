import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Porfolio/',  // <--- muy importante para GitHub Pages si usas subcarpeta
  plugins: [react()],
});
