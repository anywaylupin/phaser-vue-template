import { SCENE_KEY } from '@/core';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEY.BOOT });
  }

  preload() {
    // override this
  }

  create() {
    this.scene.start(SCENE_KEY.PRELOADER);
  }
}
