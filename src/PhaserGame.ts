import Phaser from "phaser";
import Preloader from "./scene/Preloader";
import Game from "./scene/Game";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  // backgroundColor: "#93cbee",
  backgroundColor: "#282828sss",
  pixelArt: true, // Prevent pixel art from becoming blurred when scaled.
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  autoFocus: true,
  scene: [Preloader, Game],
};

const phaserGame = new Phaser.Game(config);

export default phaserGame;
