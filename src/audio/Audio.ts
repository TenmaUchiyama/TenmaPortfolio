import Phaser from "phaser";
import { AudioKey } from "../types/PhaserKey";

export default class AudioManager {
  private static scene: Phaser.Scene;

  static runSound: Phaser.Sound.BaseSound;
  static monitorSound: Phaser.Sound.BaseSound;
  static pcSound: Phaser.Sound.BaseSound;

  static setScene(scene: Phaser.Scene) {
    AudioManager.scene = scene;

    AudioManager.runSound = AudioManager.scene.sound.add(AudioKey.RUN, {
      loop: true,
    });

    AudioManager.monitorSound = AudioManager.scene.sound.add(AudioKey.MONTIOR);
    AudioManager.pcSound = AudioManager.scene.sound.add(AudioKey.PC);

    AudioManager.pcSound.addMarker({
      name: "initial",
      start: 0,
      duration: 7,
    });

    AudioManager.pcSound.addMarker({
      name: "loop",
      start: 8,
      duration: 6,
    });
    AudioManager.pcSound.addMarker({
      name: "end",
      start: 14,
    });
  }

  static playRun(play: boolean) {
    if (!AudioManager.scene) {
      console.error("This class is not instantiated");
      return;
    }
    if (play) {
      AudioManager.runSound.play();
    } else {
      AudioManager.runSound.stop();
    }
  }

  static playMonitor() {
    if (!AudioManager.scene) {
      console.error("This class is not instantiated");
      return;
    }

    AudioManager.monitorSound.play();
  }

  static playPC(play: boolean) {
    if (!AudioManager.scene) {
      console.error("This class is not instantiated");
      return;
    }
    if (play) {
      AudioManager.pcSound.play("initial", { loop: false });

      AudioManager.pcSound.on(
        Phaser.Sound.Events.COMPLETE,
        function (sound: { key: string }) {
          AudioManager.pcSound.play("loop", { loop: true });
        }
      );
    } else {
      AudioManager.pcSound.play("end", { loop: false });
      AudioManager.pcSound.on(
        Phaser.Sound.Events.COMPLETE,
        function (sound: { key: string }) {
          AudioManager.pcSound.stop();
        }
      );
    }
  }
}
