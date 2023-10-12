import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/** {@link https://vitejs.dev/config/} */
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('vue')) {
            return 'vue'
          }
          if (id.includes('phaser')) {
            return 'phaser'
          }
        }
      }
    }
  }
})
