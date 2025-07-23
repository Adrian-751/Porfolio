import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Porfolio/', // <- Pon el nombre de tu repo aquí, incluyendo las barras
  plugins: [react()],
})
