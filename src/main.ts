import * as Phaser from 'phaser';
import App from './App.vue';
import router from './router';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { GAME_CONFIG } from '@/core/Config';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

window.addEventListener('load', function () {
  (window as any).game = new Phaser.Game(GAME_CONFIG);
});
