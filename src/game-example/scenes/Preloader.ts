import { sceneKey } from '..';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: sceneKey.PRELOADER });
  }

  preload() {
    this.load.pack('preload-asset-pack', 'assets/preload-asset-pack.json');
  }

  create() {
    this.scene.start(sceneKey.LEVEL);
  }
}
