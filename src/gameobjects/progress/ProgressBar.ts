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
 * Represents a progress bar that can be rendered using various styles and textures.
 * Extends the `ProgressTween` class to enable animation of the progress bar.
 */
export default class ProgressBar extends ProgressTween implements IProgressBar {
  bar: Phaser.GameObjects.Graphics;
  texture?: Phaser.GameObjects.Image;
  background?: Phaser.GameObjects.Image;
  text?: Phaser.GameObjects.Text;

  renderType: ProgressRenderType = ProgressRenderType.NONE;
  barWidth = 0;
  barHeight = 0;
  paddingX = 0;
  paddingY = 0;
  borderColor = 0x000000;
  fillColor = 0x00ff00;

  /**
   * @param scene - The Scene to which this Progress Bar belongs. A Progress Bar can only belong to one Scene at a time.
   * @param x - The horizontal position of this Progress Bar in the world. Default 0.
   * @param y - The vertical position of this Progress Bar in the world. Default 0.
   */
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);

    this.bar = scene.add.graphics();
    this.add(this.bar);
  }

  private fillBar(color: number, widthMultiplier: number) {
    this.bar
      .fillStyle(color, 0)
      .fillRoundedRect(
        -this.barWidth / 2,
        -this.barHeight / 2,
        this.barWidth * widthMultiplier,
        this.barHeight,
        3
      );
    return this.bar;
  }

  get fillX() {
    return this.paddingX - this.barWidth / 2;
  }

  get fillY() {
    return this.paddingY - this.barHeight / 2;
  }

  get fillWidth() {
    return this.barWidth - this.paddingX * 2;
  }

  get fillHeight() {
    return this.barHeight - this.paddingY * 2;
  }

  onUpdate(value: number) {
    this.value = value;
    this.bar.clear();

    switch (this.renderType) {
      case ProgressRenderType.COLOR:
        this.bar.fillStyle(this.borderColor);
        this.bar.fillRoundedRect(
          -this.barWidth / 2,
          -this.barHeight / 2,
          this.barWidth,
          this.barHeight,
          3
        );

        this.fillBar(0xffffff, 1);
        this.fillBar(this.fillColor, this.value);
        break;
      case ProgressRenderType.TEXTURE:
        if (this.texture) {
          const rect = this.texture.getBounds();
          this.bar.fillStyle(0x000000, 0);
          this.bar.fillRect(rect.x, rect.y, rect.width * this.value, rect.height);
        }
        break;
    }
  }

  setColor(
    width: number,
    height: number,
    paddingX: number,
    paddingY: number,
    borderColor: number,
    fillColor: number
  ) {
    this.barWidth = width;
    this.barHeight = height;
    this.paddingX = paddingX;
    this.paddingY = paddingY;
    this.borderColor = borderColor;
    this.fillColor = fillColor;

    this.renderType = ProgressRenderType.COLOR;
    this.createTween(this.value, this.valueMax);
    return this;
  }

  setTexture(texture: string, frame?: string) {
    const mask = this.bar.createGeometryMask();
    this.texture = this.scene.add.image(0, 0, texture, frame).setMask(mask);
    this.add(this.texture);

    this.renderType = ProgressRenderType.TEXTURE;
    this.createTween(this.value, this.valueMax);
    return this;
  }

  setBackground(x: number, y: number, texture: string, frame?: string) {
    if (this.background instanceof Phaser.GameObjects.GameObject) {
      this.background.setPosition(x, y).setTexture(texture, frame);
    } else {
      this.background = this.scene.add.image(x, y, texture, frame);
      this.addAt(this.background, 0);
    }

    return this;
  }

  setText(text: string, style?: Phaser.Types.GameObjects.Text.TextStyle) {
    if (this.text instanceof Phaser.GameObjects.GameObject) {
      this.text.setText(text).setStyle(style || this.text.style);
    } else {
      this.text = this.scene.add.text(0, 0, text, style).setOrigin(0.5);
      this.add(this.text);
    }

    return this;
  }
}
