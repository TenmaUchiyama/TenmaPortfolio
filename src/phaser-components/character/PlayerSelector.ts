import Phaser from "phaser";
import type MyPlayer from "./MyPlayer";
import type { NavKeys } from "../../types/NavKeys";
import type Item from "../item/Item";
import { currentPage } from "../../store/store";
import { PageKey } from "../../types/SvelteKey";
import {
  joystickInitData,
  type IJoystickData,
} from "../../types/IJoystickData";
import { EventKey, emitter } from "../event/PhaserEvent";

export default class PlayerSelector extends Phaser.GameObjects.Zone {
  selectedItem?: Item;
  private joystickData: IJoystickData;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super(scene, x, y, width, height);

    scene.physics.add.existing(this);
    this.joystickData = joystickInitData;

    emitter.on(EventKey.JOYSTICK, (joystickData: IJoystickData) => {
      this.joystickData = joystickData;
    });
  }

  update(player: MyPlayer, cursors: NavKeys) {
    if (!cursors) {
      return;
    }

    // update player selection box position so that it's always in front of the player
    const { x, y } = player;
    this.setPosition(x, y);
    // if (cursors.left?.isDown || cursors.A?.isDown || this.joystickData.left) {
    //   this.setPosition(x - 32, y);
    // } else if (
    //   cursors.right?.isDown ||
    //   cursors.D?.isDown ||
    //   this.joystickData.right
    // ) {
    //   this.setPosition(x + 32, y);
    // } else if (
    //   cursors.up?.isDown ||
    //   cursors.W?.isDown ||
    //   this.joystickData.up
    // ) {
    //   this.setPosition(x, y - 32);
    // } else if (
    //   cursors.down?.isDown ||
    //   cursors.S?.isDown ||
    //   this.joystickData.down
    // ) {
    //   this.setPosition(x, y + 32);
    // }

    if (this.selectedItem) {
      if (!this.scene.physics.overlap(this, this.selectedItem)) {
        this.selectedItem.clearDialogBox();
        this.selectedItem = undefined;
        currentPage.set(PageKey.NONE);
      }
    }
  }
}
