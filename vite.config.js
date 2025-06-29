import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ev-olution-car-landing-reactjs/', // 👈 matches the repo name
})
