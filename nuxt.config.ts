import NuxtPhaser from 'nuxtjs-phaser';
import defineNuxtConfig from './nuxt.config';

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt App with Phaser powered by nuxtjs-phaser'
    }
  },
  plugins: [{ src: 'node_modules/nuxtjs-phaser', mode: 'client' }],
  module: [NuxtPhaser]
});
