import { CONTAINER_WIDTH, SCENE_KEY } from '../constants';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEY.BOOT });
  }

  init() {
    this.resize();
    addEventListener('resize', this.resize.bind(this));
    addEventListener('orientationchange', this.resize.bind(this));
  }

  preload() {
    // this.load.image(LOADER.BOOT_IMAGE);
    // this.load.atlas(LOADER.ATLAS);
  }

  create() {
    this.scene.start(SCENE_KEY.PRELOADER);
  }

  private resize() {
    const container = document.getElementById(this.game.config.parent) as HTMLElement;

    const aspectRatio = this.scale.gameSize.aspectRatio;
    const width = Math.min(innerWidth, CONTAINER_WIDTH);
    const height = width / aspectRatio;

    Object.assign(container?.style, { width: `${width}px`, height: `${height}px` });
  }
}
