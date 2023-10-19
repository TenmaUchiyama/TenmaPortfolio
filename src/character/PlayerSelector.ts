import Phaser from "phaser";
import type MyPlayer from "./MyPlayer";
import type { NavKeys } from "../types/NavKeys";
import type Item from "../item/Item";
import { currentPage } from "../store/store";
import { PageKey } from "../types/SvelteKey";

export default class PlayerSelector extends Phaser.GameObjects.Zone {
  selectedItem?: Item;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super(scene, x, y, width, height);

    scene.physics.add.existing(this);
  }

  update(player: MyPlayer, cursors: NavKeys) {
    if (!cursors) {
      return;
    }

    // update player selection box position so that it's always in front of the player
    const { x, y } = player;
    if (cursors.left?.isDown || cursors.A?.isDown) {
      this.setPosition(x - 32, y);
    } else if (cursors.right?.isDown || cursors.D?.isDown) {
      this.setPosition(x + 32, y);
    } else if (cursors.up?.isDown || cursors.W?.isDown) {
      this.setPosition(x, y - 32);
    } else if (cursors.down?.isDown || cursors.S?.isDown) {
      this.setPosition(x, y + 32);
    }

    if (this.selectedItem) {
      if (!this.scene.physics.overlap(this, this.selectedItem)) {
        this.selectedItem.clearDialogBox();
        this.selectedItem = undefined;
        currentPage.set(PageKey.NONE);
      }
    }
  }
}
