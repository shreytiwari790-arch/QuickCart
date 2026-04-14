import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // Now the computer knows what this is!
    react()
  ],
  base: '/', // This ensures the app works correctly when deployed to Vercel
})