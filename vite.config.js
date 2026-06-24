import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from 'flowbite-react/plugin/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/film-filter/',
  plugins: [react(), tailwindcss(), flowbiteReact()],
})
