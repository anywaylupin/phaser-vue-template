// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from '../script-nodes-basic/ScriptNode';
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PreloadBarUpdaterScript extends ScriptNode {
  constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
    super(parent);

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  protected override awake(): void {
    const rect = this.gameObject as Phaser.GameObjects.Rectangle;
    const fullWidth = rect.width;

    this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p: number) => {
      rect.width = fullWidth * p;
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
