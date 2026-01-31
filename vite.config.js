import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        carbon: '#101211',
        gold: '#857861',
        almond: '#E7D4BB',
        velvet: '#29281E',
        plum: '#48252F',
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
