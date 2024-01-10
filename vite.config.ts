import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'static',
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  server: { port: 8080, host: '0.0.0.0', watch: { usePolling: true } },
  build: {
    assetsDir: '',
    minify: 'terser',
    terserOptions: { format: { comments: false } },
    rollupOptions: {
      output: {
        manualChunks(id: string): string | void {
          switch (true) {
            case id.includes('node_modules/phaser'):
              return 'phaser'
            case id.includes('node_modules/vue'):
            case id.includes('node_modules/@vue'):
              return 'vue'
          }
        }
      }
    }
  }
})
