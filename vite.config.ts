import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/structure_ordi/', // Remplacer par le nom de ton dépôt GitHub
  plugins: [react()],
})
