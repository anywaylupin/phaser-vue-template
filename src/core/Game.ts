import './style.css';

const setupGame = () => {
  (window as any).game = new Phaser.Game(GAME_CONFIG);
};
