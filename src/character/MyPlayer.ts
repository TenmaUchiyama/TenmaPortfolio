import Phaser from "phaser";
import { AnimationKey, AudioKey } from "../types/PhaserKey";
import type { NavKeys } from "../types/NavKeys";
import type PlayerSelector from "./PlayerSelector";
import ComputerItem from "../item/ComputerItem";
import { isMonitorOpen, openPage } from "../store/store";

import { PageKey } from "../types/SvelteKey";
import AudioManager from "../audio/Audio";

export default class MyPlayer extends Phaser.Physics.Arcade.Sprite {
  private PLAYER_VELOCITY: number = 200;

  private isMovable: boolean = true;
  private isKeyPressedOnce: boolean = false;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    //Display this sprite on the scene
    scene.add.existing(this);

    //Set the initial animation as Idle
    this.anims.play(AnimationKey.IDLE);

    //enable physics to make sprite collidable to objects
    scene.physics.world.enable(this);

    //To disable any animation while the death animation is being played
    this.on("animationcomplete", (anim: any, frame: any) => {
      if (anim.key === AnimationKey.DEATH) {
        this.anims.play(AnimationKey.IDLE);
      }
    });
  }

  update(
    cursors: NavKeys,
    keySpace: Phaser.Input.Keyboard.Key,
    playerSelector: PlayerSelector
  ) {
    let dx = 0;
    let dy = 0;

    if (this.anims.currentAnim!.key === AnimationKey.DEATH) return;

    if (cursors.A.isDown || cursors.left.isDown) {
      dx -= this.PLAYER_VELOCITY;
    }
    if (cursors.D.isDown || cursors.right.isDown) {
      dx += this.PLAYER_VELOCITY;
    }
    if (cursors.S.isDown || cursors.down.isDown) {
      dy += this.PLAYER_VELOCITY;
    }
    if (cursors.W.isDown || cursors.up.isDown) {
      dy -= this.PLAYER_VELOCITY;
    }

    if (dx === 0 && dy === 0) {
      this.anims.play(AnimationKey.IDLE, true);
      if (AudioManager.runSound.isPlaying) AudioManager.playRun(false);
    } else {
      this.anims.play(AnimationKey.RUN, true);
      if (!AudioManager.runSound.isPlaying) AudioManager.playRun(true);

      if (dx < 0) {
        this.flipX = true;
      } else {
        this.flipX = false;
      }
    }

    if (keySpace.isDown && !this.isKeyPressedOnce) {
      this.isKeyPressedOnce = true;
      const selectedItem = playerSelector.selectedItem;
      if (!selectedItem) return;
      if (selectedItem instanceof ComputerItem) {
        openPage.set(selectedItem.computerPage);
        if (selectedItem.computerPage === PageKey.NONE) return;
      }
      AudioManager.playRun(false);
      isMonitorOpen.openPage();
    }

    if (keySpace.isUp) {
      this.isKeyPressedOnce = false;
    }

    this.setVelocity(dx, dy);
  }
}

declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      myPlayer(x: number, y: number, texture: string): MyPlayer;
    }
  }
}

Phaser.GameObjects.GameObjectFactory.register(
  "myPlayer",
  function (
    this: Phaser.GameObjects.GameObjectFactory,
    x: number,
    y: number,
    texture: string
  ) {
    const player = new MyPlayer(this.scene, x, y, texture);

    this.displayList.add(player);
    this.updateList.add(player);

    this.scene.physics.world.enableBody(
      player,
      Phaser.Physics.Arcade.DYNAMIC_BODY
    );

    const collisionScale = [0.5, 0.2];

    if (!player.body) return;
    const body = player.body as Phaser.Physics.Arcade.Body;
    body.setBoundsRectangle();
    body
      .setSize(
        player.width * collisionScale[0],
        player.height * collisionScale[1]
      )
      .setOffset(
        player.width * (1 - collisionScale[0]) * 0.5,
        player.height * (1 - collisionScale[1])
      );

    player.setDepth(player.y + 100);
    return player;
  }
);
