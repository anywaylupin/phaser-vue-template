import ProgressTween from './ProgressTween';
import Phaser from 'phaser';

/**
 * A progress slice that extends from Phaser's Container. It can contain a 3 slice Game Object as a filler and 9 slice object as background
 *
 * You can only stretch the filler horizontally.
 *
 * ```
 *      A                          B
 *    +---+----------------------+---+
 *    |   |                      |   |
 *  C | 1 |          2           | 3 |
 *    |   |                      |   |
 *    +---+----------------------+---+
 * ```
 *
 * When changing this objects width (you cannot change its height)
 *
 *     areas 1 and 3 will remain unscaled
 *     area 2 will be stretched horizontally
 *
 * @reference {@link https://labs.phaser.io/edit.html?src=src/game%20objects/nine%20slice/progress%20bar.js}
 */
export default class ProgressSlice extends ProgressTween implements IProgressSlice {
  maxWidth: number;
  background: Phaser.GameObjects.NineSlice | null;
  text: Phaser.GameObjects.Text | null;
  bar: Phaser.GameObjects.NineSlice;

  /**
   * @param scene - The scene the progress bar belongs to.
   * @param x - The x position of the progress bar.
   * @param y - The y position of the progress bar.
   * @param texture - The texture key of the progress bar image.
   * @param frame - The frame index of the progress bar image.
   * @param maxWidth - The maximum width of the progress bar. You can adjust the width post-creation.
   * @param height - The height of the progress bar, it will be fixed to the height of the texture and cannot be changed.
   * @param leftWidth - The size of the left vertical column (A).
   * @param rightWidth - The size of the right vertical column (B).
   */
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame: string | number,
    maxWidth: number,
    height: number,
    leftWidth: number,
    rightWidth: number
  ) {
    super(scene, x, y);

    this.maxWidth = maxWidth;
    this.background = null;
    this.text = null;

    this.bar = scene.add
      .nineslice(-maxWidth / 2, 0, texture, frame, 0, height, leftWidth, rightWidth)
      .setOrigin(0, 0.5);
    this.add(this.bar);

    this.createTween();
  }

  get progress() {
    return Math.min(this.bar.width / this.maxWidth, 1);
  }

  onUpdate(value: number) {
    this.value = this.progress;
    this.bar.setSize(this.maxWidth * value, this.bar.height);
  }

  setBackground(x: number, y: number, texture: string | Phaser.Textures.Texture, frame: string | number) {
    if (this.background instanceof Phaser.GameObjects.GameObject)
      this.background.setPosition(x, y).setTexture(texture, frame);
    else {
      this.background = this.scene.add.nineslice(x, y, texture, frame);
      this.addAt(this.background, 0);
    }

    return this;
  }

  setText(text: string | Array<string>, style?: Phaser.Types.GameObjects.Text.TextStyle) {
    if (this.text instanceof Phaser.GameObjects.GameObject) this.text.setText(text).setStyle(style || this.text.style);
    else {
      this.text = this.scene.add.text(0, 0, text, style).setOrigin(0.5);
      this.add(this.text);
    }

    return this;
  }
}
