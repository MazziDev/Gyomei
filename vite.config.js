import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base fixa para GitHub Pages em https://MazziDev.github.io/Gyomei/
export default defineConfig({
  base: '/Gyomei/',
  plugins: [react()],
})
