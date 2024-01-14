export enum RenderType {
  NONE,
  TEXTURE,
  COLOR,
  GRADIENT
}

export class ProgressBar extends Phaser.GameObjects.Container implements CustomPhaser.ProgressBar {
  value = 0;
  valueMax = 1;
  tween?: Phaser.Tweens.Tween;
  background?: Phaser.GameObjects.Image;
  renderType: RenderType = RenderType.NONE;
  barWidth = 0;
  barHeight = 0;
  paddingX = 0;
  paddingY = 0;
  borderColor: number = 0x000000;
  fillColor: number = 0x00ff00;
  bar: Phaser.GameObjects.Graphics;
  image?: Phaser.GameObjects.Image;
  text?: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);

    this.bar = scene.add.graphics();
    this.add(this.bar);
  }

  get isComplete() {
    return this.value === this.valueMax;
  }

  createTween(value = this.value, max = this.valueMax, duration = 500) {
    this.tween = this.scene.tweens.addCounter({
      from: value,
      to: max,
      duration,
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

  onUpdate(value: number): void {
    this.value = value;
    this.bar.clear();

    switch (this.renderType) {
      case RenderType.COLOR: {
        this.bar.fillStyle(this.borderColor);
        this.bar.fillRoundedRect(
          -this.barWidth / 2,
          -this.barHeight / 2,
          this.barWidth,
          this.barHeight,
          3
        );

        const x = -this.barWidth / 2 + this.paddingX;
        const y = -this.barHeight / 2 + this.paddingY;
        const width = this.barWidth - this.paddingX * 2;
        const height = this.barHeight - this.paddingY * 2;

        this.bar.fillStyle(0xffffff).fillRoundedRect(x, y, width, height, 3);
        this.bar.fillStyle(this.fillColor).fillRoundedRect(x, y, width * this.value, height, 3);
        break;
      }
      case RenderType.TEXTURE: {
        if (this.image) {
          const rect = this.image.getBounds();
          this.bar.clear();
          this.bar.fillStyle(0x000000, 0);
          this.bar.fillRect(rect.x, rect.y, rect.width * this.value, rect.height);
        }
        break;
      }
    }
  }

  setColor(
    width: number,
    height: number,
    px: number,
    py: number,
    borderColor?: number,
    fillColor?: number
  ) {
    this.barWidth = width;
    this.barHeight = height;
    this.paddingX = px;
    this.paddingY = py;
    this.borderColor = borderColor ?? 0x000000;
    this.fillColor = fillColor ?? 0x00ff00;

    this.renderType = RenderType.COLOR;
    this.createTween();
    return this;
  }

  setImage(texture: string, frame?: string | number) {
    const mask = this.bar.createGeometryMask();
    this.image = this.scene.add.image(0, 0, texture, frame).setMask(mask);
    this.add(this.image);

    this.renderType = RenderType.TEXTURE;
    this.createTween();
    return this;
  }

  setText(text: string, style?: Phaser.Types.GameObjects.Text.TextStyle) {
    if (this.text) {
      this.text.setText(text).setStyle(style ?? this.text.style);
    } else {
      this.text = this.scene.add.text(0, 0, text, style).setOrigin(0.5);
      this.add(this.text);
    }

    return this;
  }

  setBackground(x: number, y: number, key: string, frame?: string | number): this {
    if (this.background) {
      this.background.setPosition(x, y).setTexture(key, frame);
    } else {
      this.background = this.scene.add.image(x, y, key, frame);
      this.addAt(this.background, 0);
    }

    return this;
  }
}

Phaser.GameObjects.GameObjectFactory.register(
  'progressBar',
  function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number) {
    return new ProgressBar(this.scene, x, y);
  }
);
