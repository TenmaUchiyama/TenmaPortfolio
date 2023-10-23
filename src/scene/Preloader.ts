import Phaser from "phaser";
import {
  AudioKey,
  CharacterKey,
  FontKey,
  MapKey,
  SceneKey,
} from "../types/PhaserKey";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKey.BOOTSTRAP);
  }

  preload() {
    this.load.spritesheet(CharacterKey.STICKMAN, "/character/Full.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.tilemapTiledJSON(MapKey.TILEMAPKEY, "/map/OfficeTilemap.tmj");
    this.load.spritesheet(MapKey.MAPIMG, "/map/office-spritesheet.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.audio(AudioKey.RUN, ["/audio/run.ogg", "/audio/run.mp3"], {
      loop: true,
    });
    this.load.audio(AudioKey.MONTIOR, ["/audio/machine-button.mp3"], {
      loop: false,
    });
    this.load.audio(AudioKey.PC, ["/audio/pc_on.mp3"]);
    this.load.audio(AudioKey.BGM, ["/audio/bgm/bgm1.mp3"]);

    this.load.on("complete", () => {
      this.scene.start(SceneKey.GAME);
    });
  }
}
