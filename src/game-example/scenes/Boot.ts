import { sceneKey } from '..';

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: sceneKey.BOOT });
  }

  preload() {
    this.load.pack('boot-asset-pack', 'assets/boot-asset-pack.json');
  }

  create() {
    this.scene.start(sceneKey.PRELOADER);
  }
}
