/// <reference types="vite/client" />
/// <reference path="node_modules/nuxtjs-phaser/@types/vue.index.d.ts"/>
/// <reference path="node_modules/nuxtjs-phaser/@types/index.d.ts"/>
/// <reference path="node_modules/nuxtjs-phaser/@types/global.d.ts"/>
/// <reference path="node_modules/nuxtjs-phaser/@types/vue-shim.d.ts"/>

declare module '*.vue';
declare module 'nuxtjs-phaser';
declare module 'nuxtjs-phaser/vue.index';

declare global {
  const NuxtPhaser: {
    eventEmitter: Phaser.Events.EventEmitter;
  };
}
