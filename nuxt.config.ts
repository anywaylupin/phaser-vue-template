import defineNuxtConfig from './nuxt.config';

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt App with Phaser powered by nuxtjs-phaser'
    }
  },
  css: ['@/styles/main.css'],
  plugins: [{ src: 'node_modules/nuxtjs-phaser', mode: 'client' }]
});
