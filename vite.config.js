import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/node_modules\/(react-dom|react-router-dom)(\/|$)/.test(id)) return 'vendor'
          if (/node_modules\/react(\/|$)/.test(id)) return 'vendor'
          if (/node_modules\/(framer-motion|gsap)(\/|$)/.test(id)) return 'animations'
        },
      },
    },
    cssMinify: true,
  },
})
