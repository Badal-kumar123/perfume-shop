import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  darkMode: 'class',
   theme: {
  extend: {
    colors: {
      google: {
        'text-gray': '#3c4043',
        'button-blue': '#1a73e8',
        'button-blue-hover': '#5195ee',
        'logo-blue': '#4285f4',
        'logo-green': '#34a853',
        'logo-yellow': '#fbbc05',
        'logo-red': '#ea4335',
      },
    },
  },
},

  
})
