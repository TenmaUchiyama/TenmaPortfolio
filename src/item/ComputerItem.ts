import Phaser from "phaser";
import Item from "./Item";
import { PageKey } from "../types/SvelteKey";
import { currentPage } from "../store/store";

export default class ComputerItem extends Item {
  computerPage!: PageKey;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | undefined
  ) {
    super(scene, x, y, texture, frame);
  }

  setComputerPage(page: PageKey) {
    this.computerPage = page;
    if (this.computerPage !== PageKey.NONE) this.setNameBox(this.computerPage);
  }

  onOverlapDialog() {
    if (this.computerPage && this.computerPage !== PageKey.NONE) {
      this.setDialogBox("Press Space to view " + this.computerPage);
    }
  }

  setCurrentPage() {
    if (this.computerPage) {
      currentPage.set(this.computerPage);
    }
  }
}
