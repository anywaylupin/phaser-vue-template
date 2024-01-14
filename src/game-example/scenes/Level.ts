import { sceneKey } from '../config';

export default class Level extends Phaser.Scene {
  gameOver = false;
  level = 1;
  score = 0;

  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  stars?: Phaser.Physics.Arcade.Group;
  bombs?: Phaser.Physics.Arcade.Group;
  scoreText?: Phaser.GameObjects.Text;

  constructor() {
    super({ key: sceneKey.LEVEL });
  }

  init() {
    this.gameOver = false;
    this.level = 1;
    this.score = 0;
  }

  preload() {
    this.add.image(400, 300, 'sky');

    this.cursors = this.input.keyboard?.createCursorKeys();

    this.scoreText = this.add.text(16, 16, 'Level: 1\nScore: 0', { fontSize: 32 });
  }

  create() {
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'platform').setScale(2).refreshBody();
    platforms.createMultiple([
      { key: 'platform', setXY: { x: 600, y: 400 } },
      { key: 'platform', setXY: { x: 50, y: 250 } },
      { key: 'platform', setXY: { x: 750, y: 220 } }
    ]);

    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate((child) => {
      (child as Phaser.Physics.Arcade.Image).setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      return true;
    });

    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.stars, platforms);
    this.physics.add.collider(this.bombs, platforms);
    this.physics.add.collider(this.player, this.bombs, this.hitBomb.bind(this));
    this.physics.add.overlap(this.player, this.stars, this.collectStar.bind(this));
  }

  update() {
    if (this.gameOver || !this.player) return;

    switch (true) {
      case this.cursors?.left.isDown:
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
        break;
      case this.cursors?.right.isDown:
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
        break;
      default:
        this.player.setVelocityX(0);
        this.player.anims.play('turn', true);
        break;
    }

    if (this.cursors?.up.isDown && this.player?.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collectStar(
    _: Phaser.Types.Physics.Arcade.GameObjectWithBody | Phaser.Tilemaps.Tile,
    star: Phaser.Types.Physics.Arcade.GameObjectWithBody | Phaser.Tilemaps.Tile
  ) {
    (star as Phaser.Types.Physics.Arcade.ImageWithDynamicBody).disableBody(true, true);

    this.score += 10;

    if (this.stars?.countActive(true) === 0) {
      this.level++;
      this.levelUp();
    }

    this.scoreText?.setText(`Level: ${this.level}\nScore: ${this.score}`);
  }

  levelUp() {
    this.stars?.children.iterate((child) => {
      const image = child as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
      image.enableBody(true, image.x, 0, true, true);
      return true;
    });

    const x =
      (this.player?.x as number) < 400
        ? Phaser.Math.Between(400, 800)
        : Phaser.Math.Between(0, 400);

    const bomb = this.bombs?.create(x, 16, 'bomb');
    bomb.setBounce(1).setCollideWorldBounds(true).setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
  }

  hitBomb() {
    this.gameOver = true;

    this.physics.pause();
    this.player?.setTint(0xff0000);
    this.player?.anims.play('turn');

    this.time.delayedCall(500, () => this.scene.start(sceneKey.LEVEL));
  }
}
