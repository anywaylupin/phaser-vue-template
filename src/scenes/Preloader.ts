// You can write more code here

/* START OF COMPILED CODE */
import PreloadBarUpdaterScript from '../script-nodes/PreloadBarUpdaterScript';
import { SCENE_KEY } from '../constants';
import { GameEvents } from '../events';
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEY.PRELOADER });

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // guapen
    const guapen = this.add.image(505.0120544433594, 360, 'guapen');
    guapen.scaleX = 0.32715486817515643;
    guapen.scaleY = 0.32715486817515643;

    // progressBar
    const progressBar = this.add.rectangle(553.0120849609375, 361, 256, 20);
    progressBar.setOrigin(0, 0);
    progressBar.isFilled = true;
    progressBar.fillColor = 14737632;

    // preloadUpdater
    new PreloadBarUpdaterScript(progressBar);

    // progressBarBg
    const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20);
    progressBarBg.setOrigin(0, 0);
    progressBarBg.fillColor = 14737632;
    progressBarBg.isStroked = true;

    // loadingText
    const loadingText = this.add.text(552.0120849609375, 329, '', {});
    loadingText.text = 'Loading...';
    loadingText.setStyle({ color: '#e0e0e0', fontFamily: 'arial', fontSize: '20px' });

    this.events.emit(GameEvents.SCENE_AWAKE);
  }

  /* START-USER-CODE */

  // Write your code here

  preload() {
    this.editorCreate();
  }

  create() {
    if (process.env.NODE_ENV === 'development') {
      const start = new URLSearchParams(location.search).get('start');

      if (start) {
        console.log(`Development: jump to ${start}`);
        this.scene.start(start);
        return;
      }
    }

    this.scene.start('Level');
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here