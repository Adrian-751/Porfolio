import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Porfolio/', // usa el nombre del repo o carpeta base si no es /
  plugins: [react()],
});
