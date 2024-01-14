import { fileURLToPath, URL } from 'node:url';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'static',
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.ts',
      inject: {
        tags: [
          {
            tag: 'script',
            attrs: { src: 'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.70.0/phaser.min.js' }
          }
        ]
      },
      viteNext: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@types': fileURLToPath(new URL('./types', import.meta.url)),
      '@styles': fileURLToPath(new URL('./styles', import.meta.url))
    }
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
              return 'phaser';
            case id.includes('node_modules/vue'):
            case id.includes('node_modules/@vue'):
              return 'vue';
          }
        }
      }
    }
  }
});
