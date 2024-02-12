import Phaser from "phaser";

export default class Item extends Phaser.Physics.Arcade.Sprite {
  private dialogBox!: Phaser.GameObjects.Container;
  private nameBox!: Phaser.GameObjects.Container;
  private statusBox!: Phaser.GameObjects.Container;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string
  ) {
    super(scene, x, y, texture, frame);

    this.dialogBox = this.scene.add.container().setDepth(100000);
    this.nameBox = this.scene.add.container().setDepth(100000);
  }

  setNameBox(text: string) {
    const innerText = this.scene.add
      .text(0, 0, text)
      .setFontFamily("Arial")
      .setFontSize(12)
      .setColor("#000000")
      .setAlpha(0.5);

    // set dialogBox slightly larger than the text in it
    const nameBoxWidth = innerText.width + 4;
    const nameBoxHeight = innerText.height + 2;
    const nameBoxX = this.x - nameBoxWidth * 0.5;
    const nameBoxY = this.y - this.height * 1.2;

    this.nameBox.add(
      this.scene.add
        .graphics()
        .fillStyle(0xaaaaaa, 0.5)
        .fillRoundedRect(nameBoxX, nameBoxY, nameBoxWidth, nameBoxHeight, 3)
        .lineStyle(1.5, 0x000000, 0.5)
        .strokeRoundedRect(nameBoxX, nameBoxY, nameBoxWidth, nameBoxHeight, 3)
    );

    this.nameBox.add(innerText.setPosition(nameBoxX + 2, nameBoxY));
  }

  setDialogBox(text: string) {
    const innerText = this.scene.add
      .text(0, 0, text)
      .setFontFamily("Arial")
      .setFontSize(12)
      .setColor("#000000");

    // set dialogBox slightly larger than the text in it
    const dialogBoxWidth = innerText.width + 4;
    const dialogBoxHeight = innerText.height + 2;
    const dialogBoxX = this.x - dialogBoxWidth * 0.5;
    const dialogBoxY = this.y + this.height * 0.5;

    this.dialogBox.add(
      this.scene.add
        .graphics()
        .fillStyle(0xffffff, 1)
        .fillRoundedRect(
          dialogBoxX,
          dialogBoxY,
          dialogBoxWidth,
          dialogBoxHeight,
          3
        )
        .lineStyle(1.5, 0x000000, 1)
        .strokeRoundedRect(
          dialogBoxX,
          dialogBoxY,
          dialogBoxWidth,
          dialogBoxHeight,
          3
        )
    );
    this.dialogBox.add(innerText.setPosition(dialogBoxX + 2, dialogBoxY));
  }

  clearDialogBox() {
    this.dialogBox.removeAll(true);
  }

  clearNameBox() {
    this.nameBox.removeAll(true);
  }
}
