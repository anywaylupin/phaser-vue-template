/**
 * Represents a mixin class for creating and updating numeric tween animations.
 */
export default abstract class ProgressTween extends Phaser.GameObjects.Container implements IProgressTween {
  private tween?: Phaser.Tweens.Tween;
  abstract onUpdate(value: number): void;
  value = 0;
  valueMax = 1;

  /**
   * @param scene - The Scene to which this Game Objects belongs. A Game Objects can only belong to one Scene at a time.
   * @param x - The horizontal position of this Game Objects in the world. Default 0.
   * @param y - The vertical position of this Game Objects in the world. Default 0.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);
  }

  createTween(value = this.value, max = this.valueMax, duration = 500) {
    this.tween = this.scene.tweens.addCounter({
      from: value,
      to: max,
      duration: duration,
      ease: Phaser.Math.Easing.Cubic.InOut,
      onUpdate: (tw) => this.onUpdate(tw.getValue())
    });

    return this;
  }

  update(value = this.value, max = this.valueMax, duration = 500) {
    if (this.tween?.isPlaying()) {
      this.tween.updateTo('value', value);
    } else {
      this.createTween(value, max, duration);
    }
  }
}
