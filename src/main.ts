import * as Phaser from 'phaser';

import App from './App.vue';
import VuePhaserPlugin from 'nuxtjs-phaser/vue.index';
import router from './router';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/styles/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VuePhaserPlugin);

app.mount('#app');

console.info(`Phaser version: ${Phaser.VERSION}`);
