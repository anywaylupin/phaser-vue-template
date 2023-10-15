declare enum ProgressRenderType {
  /** No specific rendering type. */
  NONE,

  /** Texture-based rendering for the progress pie. */
  TEXTURE,

  /** Color-based rendering for the progress pie. */
  COLOR,

  /** Gradient-based rendering for the progress pie. */
  GRADIENT
}

/**
 * Represents an interface for creating and updating numeric tween animations.
 */
declare interface IProgressTween {
  /** The current value of the tween animation.*/
  value: number;

  /** The target value of the tween animation. */
  valueMax: number;

  /**
   * Creates a tween animation for a value.
   * @param value - The starting value of the tween animation.
   * @param max - The target value of the tween animation.
   * @param duration - The duration of the tween animation in milliseconds.
   */
  createTween(value?: number, max?: number, duration?: number): IProgressTween;

  /**
   * Method to override. Called when the tween animation updates.
   * @param value - The current value of the tween animation.
   */
  onUpdate(value: number): void;
}

/**
 * Represents an interface for the ProgressBar class.
 */
declare interface IProgressBar {
  /** The graphics object used to draw the progress bar. */
  bar: Phaser.GameObjects.Graphics;

  /** The optional texture to be used for texture-based rendering. */
  texture?: Phaser.GameObjects.Image;

  /** The optional background image of the progress bar. */
  background?: Phaser.GameObjects.Image;

  /** The optional text to be displayed with the progress bar. */
  text?: Phaser.GameObjects.Text;

  /** The type of rendering for the progress bar. */
  renderType: ProgressRenderType;

  /** The width of the progress bar. */
  barWidth: number;

  /** The height of the progress bar. */
  barHeight: number;

  /** The horizontal padding of the progress bar. */
  paddingX: number;

  /** The vertical padding of the progress bar. */
  paddingY: number;

  /** The color of the border. */
  borderColor: number;

  /** The color of the progress fill. */
  fillColor: number;

  /**
   * Sets the color and dimensions of the ProgressBar.
   * @param width - The width of the ProgressBar.
   * @param height - The height of the ProgressBar.
   * @param paddingX - The horizontal padding of the ProgressBar.
   * @param paddingY - The vertical padding of the ProgressBar.
   * @param borderColor - The color of the border of the ProgressBar.
   * @param fillColor - The color of the filled portion of the ProgressBar.
   */
  setColor(
    width: number,
    height: number,
    paddingX: number,
    paddingY: number,
    borderColor: number,
    fillColor: number
  ): this;

  /**
   * Sets the texture of the progress bar.
   * @param texture - The name of the texture to use.
   * @param frame - The name of the texture frame to use.
   *
   */
  setTexture(texture: string, frame?: string): this;

  /**
   * Sets the background image of the progress bar.
   * @param x - The x coordinate of the background image.
   * @param y - The y coordinate of the background image.
   * @param texture - The name of the texture to use for the background.
   * @param frame - The name of the texture frame to use for the background.
   */
  setBackground(x: number, y: number, texture: string, frame?: string): this;

  /**
   * Sets the text to display with the progress bar.
   * @param text - The text to display.
   * @param style - The style object to use for the displayed text.
   */
  setText(text: string, style?: Phaser.Types.GameObjects.Text.TextStyle): this;
}

/**
 * Represents an interface for the ProgressPie class.
 */
declare interface IProgressPie {
  /** The start angle of the progress pie, in degrees. */
  startAngle: number;

  /** The end angle of the progress pie, in degrees. */
  endAngle: number;

  /** The direction of the progress pie. */
  anticlockwise: boolean;

  /** The amount of overshoot when drawing the pie. */
  overshoot: number;

  /** Graphics object representing the pie. */
  pie: Phaser.GameObjects.Graphics;

  /** Image object used for texturing the pie. */
  sprite?: Phaser.GameObjects.Image;

  /** Graphics object used as a mask for the textured pie. */
  spriteMask?: Phaser.GameObjects.Graphics;

  /** The progress value calculated based on start and end angles. */
  progress: number;

  /**
   * Method called when updating the progress pie with a new value.
   * @param value - The new value for the progress pie.
   */
  onUpdate(value: number): void;

  /**
   * Sets the color properties of the progress pie.
   * @param radius - The radius of the pie.
   * @param borderWidth - The width of the border.
   * @param fillWidth - The width of the filled part.
   * @param borderColor - The color of the border.
   * @param fillColor - The color of the filled part.
   */
  setColor(
    radius: number,
    borderWidth: number,
    fillWidth: number,
    borderColor: number,
    fillColor: number
  ): IProgressPie;

  /**
   * Sets the texture of the progress pie.
   * @param texture - The texture key or URL.
   * @param frame - The texture frame (optional).
   */
  setTexture(texture: string, frame?: string): IProgressPie;

  /**
   * Sets the start angle of the progress pie.
   * @param value - The start angle in degrees.
   */
  setStartAngle(value: number): IProgressPie;

  /**
   * Sets the end angle of the progress pie.
   * @param value - The end angle in degrees.
   */
  setEndAngle(value: number): IProgressPie;

  /**
   * Sets the direction of the progress pie.
   * @param value - Set to true for anticlockwise direction.
   */
  setAnticlockwise(value: boolean): IProgressPie;
}

/**
 * Interface representing the properties and methods of a progress bar that extends from Phaser's Container.
 */
interface IProgressSlice {
  /** The maximum width of the progress bar. */
  maxWidth: number;

  /** The background of the progress bar. */
  background: Phaser.GameObjects.NineSlice | null;

  /** The text display of the progress bar. */
  text: Phaser.GameObjects.Text | null;

  /** The fill of the progress bar. */
  bar: Phaser.GameObjects.NineSlice;

  /** Gets the current value of the progress slice between 0 and 1. */
  progress: number;

  /**
   * Resizes a bar based on a given value.
   * @param value - The value parameter is a number between 0 and 1 that represents the progress of some task or process.
   * The maximum width of the bar is multiplied by the value to determine the current width of the bar.
   */
  onUpdate(value: number): void;

  /**
   * Sets the background of the progress bar.
   * @param x - The x position of the background.
   * @param y - The y position of the background.
   * @param texture - The texture key of the background image.
   * @param frame - The frame index of the background image.
   */
  setBackground(
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frame: string | number
  ): IProgressSlice;

  /**
   * Sets the text of the progress bar, it displays on top of the Progress Slice.
   * @param text - The text this Text object will display.
   * @param style - The Text style configuration object.
   */
  setText(
    text: string | Array<string>,
    style?: Phaser.Types.GameObjects.Text.TextStyle
  ): IProgressSlice;
}
