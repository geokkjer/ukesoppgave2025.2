import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/todos': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    minify: 'terser'
  }
})
