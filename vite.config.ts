import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactSwc from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [process.env.VITE_MODE === 'swc' ? reactSwc() : react()],
})
