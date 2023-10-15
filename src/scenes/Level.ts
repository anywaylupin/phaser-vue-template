// You can write more code here

/* START OF COMPILED CODE */
import { GameEvents } from '@/events';
import { OnPointerDownScript, PushActionScript } from '@/scripts';
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // fufuSuperDino
    const fufuSuperDino = this.add.image(640, 257, 'FufuSuperDino');

    // onPointerDownScript
    const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

    // pushAction
    new PushActionScript(onPointerDownScript);

    // text
    const text = this.add.text(640, 458, '', {});
    text.setOrigin(0.5, 0.5);
    text.text = 'Phaser 3 + Phaser Editor 2D\nVue + TypeScript';

    this.events.emit(GameEvents.SCENE_AWAKE);

    this.events.on(GameEvents.SCENE_AWAKE, () => {
      console.log('like');
    });
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
