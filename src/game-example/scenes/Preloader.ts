import { sceneKey } from '..';

export default class Preloader extends Phaser.Scene {
  loadingBar?: CustomPhaser.ProgressBar;

  constructor() {
    super({ key: sceneKey.PRELOADER });
  }

  preload() {
    this.add.image(400, 300, 'sky');
    this.load.pack('preload-asset-pack', 'assets/preload-asset-pack.json');

    this.loadingBar = this.add.progressBar(400, 300);
    this.loadingBar.setColor(400, 50, 5, 5, 0x34495e, 0x41b883);

    this.load.on(Phaser.Loader.Events.PROGRESS, (value: number) => {
      this.loadingBar?.update(value);
    });
  }

  create() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.tweens.add({
      targets: this.loadingBar,
      alpha: 0,
      delay: 500,
      duration: 500,
      onComplete: () => this.next()
    });
  }

  next() {
    this.scene.start(sceneKey.LEVEL);
  }
}
