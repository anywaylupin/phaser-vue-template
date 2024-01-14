declare namespace CustomPhaser {
  /**
   * An abstract class representing a progress bar or a similar progress indicator in a Phaser game.
   * This class extends Phaser.GameObjects.Container and requires implementation of the `onUpdate` method.
   *
   * @abstract
   * @extends Phaser.GameObjects.Container
   */
  class ProgressBar extends Phaser.GameObjects.Container {
    /**
     * @param scene The scene to which this progress bar belongs.
     * @param x The x-coordinate of the progress bar.
     * @param y The y-coordinate of the progress bar.
     */
    constructor(scene: Phaser.Scene, x: number, y: number);

    readonly isComplete: boolean;

    /** The current value of the progress. */
    value: number;

    /** The maximum value of the progress. */
    valueMax: number;

    /** An optional Phaser tween object for animating the progress value. */
    tween?: Phaser.Tweens.Tween;

    /**
     * Abstract method to handle updates to the progress. Must be implemented by subclasses.
     * @abstract
     * @param progress - The current progress value to be handled.
     */
    onUpdate(progress: number): void;

    /**
     * Creates a tween for animating the progress value.
     * @param value - The initial value of the progress. Defaults to the current value.
     * @param max - The maximum value of the progress. Defaults to the current maximum value.
     * @param duration - The duration of the tween in milliseconds. Defaults to 500ms.
     */
    createTween(value?: number, max?: number, duration?: number): this;

    /**
     * Sets or updates the background image of this gameobject.
     * @param x - The x coordinate for the background image.
     * @param y - The y coordinate for the background image.
     * @param key - The texture key for the image.
     * @param frame - The frame or texture atlas key for a specific image.
     * @returns The instance of this Counter object for method chaining.
     */
    setBackground(x: number, y: number, key: string, frame?: string | number): this;

    /**
     * Updates the progress value, optionally animating the change.
     * @param value - The new value of the progress. Defaults to the current value.
     * @param max - The new maximum value of the progress. Defaults to the current maximum value.
     * @param duration - The duration of the tween in milliseconds. Defaults to 500ms.
     */
    update(value?: number, max?: number, duration?: number): void;

    /** The rendering type of the progress bar. */
    renderType: number;

    /** The width of the progress bar. */
    barWidth: number;

    /** The height of the progress bar. */
    barHeight: number;

    /** The horizontal padding of the progress bar. */
    paddingX: number;

    /** The vertical padding of the progress bar. */
    paddingY: number;

    /** The border color of the progress bar. @default 0x000000 */
    borderColor: number;

    /** The fill color of the progress bar. @default 0x00ff00 */
    fillColor: number;

    /** he Phaser graphics object used to render the progress bar. */
    bar: Phaser.GameObjects.Graphics;

    /** The Phaser image object used when the progress bar uses a texture. */
    image?: Phaser.GameObjects.Image;

    /** The Phaser text object used to display text over the progress bar. */
    text?: Phaser.GameObjects.Text;

    /**
     * Sets the color and dimensions for a color-based progress bar.
     * @param width The width of the progress bar.
     * @param height The height of the progress bar.
     * @param px The horizontal padding.
     * @param py The vertical padding.
     * @param borderColor The border color of the progress bar.
     * @param fillColor The fill color of the progress bar.
     * @returns The instance of the ProgressBar for method chaining.
     */
    setColor(
      width: number,
      height: number,
      px: number,
      py: number,
      borderColor?: number,
      fillColor?: number
    ): this;

    /**
     * Sets the image for a texture-based progress bar.
     * @param texture The key of the texture to use.
     * @param frame The frame or texture atlas key for a specific image.
     * @returns The instance of the ProgressBar for method chaining.
     */
    setImage(texture: string, frame?: string | number): this;

    /**
     * Sets or updates the text displayed over the progress bar.
     * @param text The text to display.
     * @param style The style configuration for the text object.
     * @returns The instance of the ProgressBar for method chaining.
     */
    setText(text: string, style?: Phaser.Types.GameObjects.Text.TextStyle): this;
  }
}
