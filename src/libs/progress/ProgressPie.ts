import ProgressTween from './ProgressTween';

enum ProgressRenderType {
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
 * Represents a progress pie that can be rendered using various styles and textures.
 * Extends the `ProgressTween` class to enable animation of the progress pie.
 */
export default class ProgressPie extends ProgressTween implements IProgressPie {
  renderType: ProgressRenderType = ProgressRenderType.NONE;
  radius: number = 0;
  borderWidth: number = 0;
  fillWidth: number = 0;
  borderColor: number = 0x000000;
  fillColor: number = 0x00ff00;

  startAngle: number;
  endAngle: number;
  anticlockwise: boolean;
  overshoot: number;

  pie: Phaser.GameObjects.Graphics;
  sprite: Phaser.GameObjects.Image | undefined;
  spriteMask: Phaser.GameObjects.Graphics | undefined;

  /**
   * @param scene - The Scene to which this Progress Pie belongs. A Progress Pie can only belong to one Scene at a time.
   * @param x - The horizontal position of this Progress Pie in the world. Default 0.
   * @param y - The vertical position of this Progress Pie in the world. Default 0.
   * @param startAngle The start angle of the progress pie, in degrees. Default 0.
   * @param endAngle The end angle of the progress pie, in degrees. Default 360.
   * @param anticlockwise - The direction of the progress pie. Default is `false`.
   * @param overshoot - The amount of overshoot when drawing the pie. Default is `0.02`.
   */
  constructor(
    scene: Phaser.Scene,
    x = 0,
    y = 0,
    startAngle = 0,
    endAngle = 360,
    anticlockwise = false,
    overshoot = 0.02
  ) {
    super(scene, x, y);
    scene.add.existing(this);

    this.startAngle = Phaser.Math.DegToRad(startAngle);
    this.endAngle = Phaser.Math.DegToRad(endAngle);
    this.anticlockwise = anticlockwise;
    this.overshoot = overshoot;

    this.pie = this.scene.add.graphics().setAngle(-90);
    this.add(this.pie);
  }

  get rect() {
    return this.sprite?.getBounds() as Phaser.Geom.Rectangle;
  }

  get progress() {
    return this.startAngle + (this.endAngle - this.startAngle) * this.value;
  }

  onUpdate(value: number) {
    this.value = value;

    switch (this.renderType) {
      case ProgressRenderType.COLOR:
        this.pie.lineStyle(this.borderWidth, this.borderColor).beginPath();
        this.pie.arc(0, 0, this.radius, this.startAngle, this.endAngle, this.anticlockwise, this.overshoot);
        this.pie.strokePath().closePath().beginPath();

        this.pie.lineStyle(this.fillWidth, this.fillColor);
        this.pie.arc(0, 0, this.radius, this.startAngle, this.progress, this.anticlockwise, this.overshoot);
        this.pie.strokePath().closePath();
        break;
      case ProgressRenderType.TEXTURE:
        this.spriteMask
          ?.clear()
          .fillStyle(0x000000, 0.2)
          .slice(
            0,
            0,
            Math.max(this.rect.width, this.rect.height) / 2,
            this.startAngle,
            this.endAngle,
            this.anticlockwise
          )
          .fillPath();
        break;
      default:
        break;
    }
  }

  setColor(radius: number, borderWidth: number, fillWidth: number, borderColor: number, fillColor: number) {
    this.radius = radius;
    this.borderWidth = borderWidth;
    this.fillWidth = fillWidth;
    this.borderColor = borderColor;
    this.fillColor = fillColor;

    this.renderType = ProgressRenderType.COLOR;
    this.createTween(this.value, this.valueMax);
    return this;
  }

  setTexture(texture: string, frame?: string) {
    const mask = this.spriteMask?.createGeometryMask() as Phaser.Display.Masks.GeometryMask;
    this.sprite = this.scene.add.image(0, 0, texture, frame).setMask(mask);
    this.add(this.sprite);

    this.renderType = ProgressRenderType.TEXTURE;
    this.createTween(this.value, this.valueMax);
    return this;
  }

  setStartAngle(value: number) {
    this.startAngle = Phaser.Math.DegToRad(value);
    return this;
  }

  setEndAngle(value: number) {
    this.endAngle = Phaser.Math.DegToRad(value);
    return this;
  }

  setAnticlockwise(value: boolean) {
    this.anticlockwise = value;
    return this;
  }
}
