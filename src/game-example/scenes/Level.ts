import { sceneKey } from '../config';

export default class Level extends Phaser.Scene {
  constructor() {
    super({ key: sceneKey.LEVEL });
  }

  create() {
    this.editorCreate();
  }

  editorCreate(): void {
    const text_1 = this.add.text(640, 462, '', {});
    text_1.setOrigin(0.5, 0);
    text_1.text = 'Phaser 3 + Phaser Editor 2D + TypeScript';
    text_1.setStyle({ fontFamily: 'arial', fontSize: '3em' });
  }
}
