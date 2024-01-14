declare namespace Phaser {
  namespace GameObjects {
    interface GameObjectFactory {
      /**
       * A class representing a progress bar that extends AbstractProgress.
       * It displays the current progress as a graphical bar in a Phaser game.
       *
       * @extends AbstractProgress
       */
      progressBar(x: number, y: number): CustomPhaser.ProgressBar;
    }
  }
}
