import { Boot, Preloader, Level } from '@/game-example/scenes';

export const sceneKey = {
  BOOT: 'Boot',
  PRELOADER: 'Preloader',
  LEVEL: 'Level'
} as const;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#242424',
  title: 'Phaser + Vue.js Example',
  url: '',
  parent: 'phaser',
  autoFocus: true,
  input: {
    activePointers: 1
  },
  banner: {
    hidePhaser: false,
    text: '#FFFFFF',
    background: ['#41b883', '#34495e']
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  render: {
    pixelArt: true
  },
  scene: [Boot, Preloader, Level]
};
