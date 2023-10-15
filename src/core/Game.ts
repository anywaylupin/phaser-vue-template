import { Boot, Preloader, Level } from '@/scenes';
import { GAME_WIDTH, GAME_HEIGHT } from '@/core/Config';

export const GAME_CONFIG = <Phaser.Types.Core.GameConfig>{
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  type: Phaser.AUTO,
  backgroundColor: '#2f2f2f',
  title: 'Vue + Nuxt',
  url: '',
  parent: 'phaser',
  autoFocus: true,
  input: {
    activePointers: 1
  },
  banner: {
    hidePhaser: false,
    text: '#FFFFFF',
    background: ['#00bd7e', '#34495e']
  },
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 }
    }
  },
  render: {
    pixelArt: true
  },
  scene: [Boot, Preloader, Level]
};

export const setupGame = () => new Phaser.Game(GAME_CONFIG);
