import { createCharacterAnims } from "../character/createCharacterAnims";
import "../character/MyPlayer";
import {
  SceneKey,
  CharacterKey,
  AudioKey,
  MapKey,
  LayerKey,
  FontKey,
} from "../types/PhaserKey";
import type { NavKeys } from "../types/NavKeys";
import { isBgmOn, isMonitorOpen } from "../store/store";
import PlayerSelector from "../character/PlayerSelector";
import ComputerItem from "../item/ComputerItem";
import type Item from "../item/Item";
import { PageKey } from "../types/SvelteKey";
import AudioManager from "../audio/Audio";
import { EventKey, emitter } from "../event/PhaserEvent";

export default class Game extends Phaser.Scene {
  private MAPSCALE: number = 2;
  private cursor!: NavKeys | undefined;
  private player!: any;
  private keySpace!: Phaser.Input.Keyboard.Key | undefined;
  private map!: Phaser.Tilemaps.Tilemap;
  private playerSelector!: PlayerSelector;

  //temp
  //170 for on 169 for off

  constructor() {
    super(SceneKey.GAME);
  }

  preload() {}

  disableKeys() {
    this.input.keyboard!.enabled = false;
    this.input.keyboard!.resetKeys();
  }

  enableKeys() {
    this.input.keyboard!.enabled = true;
  }

  create() {
    this.add.text(150, 450, "Welcome to Tenma's Domain!", {
      font: "3rem Poppins semibold",
      color: "orange",
    });
    this.enableKeys();
    this.cursor = {
      ...this.input.keyboard!.createCursorKeys(),
      ...(this.input.keyboard!.addKeys("W,S,A,D") as NavKeys),
    };
    this.keySpace = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    AudioManager.setScene(this);

    createCharacterAnims(this.anims);
    this.player = this.add.myPlayer(300, 300, CharacterKey.STICKMAN);
    this.playerSelector = new PlayerSelector(this, 0, 0, 16, 16);

    this.cameras.main.zoom = this.MAPSCALE;
    this.cameras.main.startFollow(this.player, true);

    this.map = this.make.tilemap({ key: MapKey.TILEMAPKEY });
    const tilesetImg = this.map.addTilesetImage(
      "office-spritesheet",
      MapKey.MAPIMG
    );

    const groundLayer = this.map.createLayer(
      LayerKey.FLOOR_TILELAYER,
      tilesetImg!
    );
    const wallLayer = this.map.createLayer(
      LayerKey.WALL_TILELAYER,
      tilesetImg!
    );

    groundLayer!.setCollisionByProperty({ collision: true });
    wallLayer!.setCollisionByProperty({ collision: true });
    this.physics.add.collider(this.player, wallLayer!);

    this.addObjet(LayerKey.TABLE_OBJLAYER, true);

    const computer1 = this.physics.add.staticGroup({
      classType: ComputerItem,
    });
    const computerLayer1 = this.map.getObjectLayer(LayerKey.COMPUTER1_OBJLAYER);

    computerLayer1!.objects.forEach((obj) => {
      const computer = this.addItem(computer1, obj) as ComputerItem;

      computer.setComputerPage(PageKey.HOBBY);
    });
    const computer2 = this.physics.add.staticGroup({
      classType: ComputerItem,
    });
    const computerLayer2 = this.map.getObjectLayer(LayerKey.COMPUTER2_OBJLAYER);

    computerLayer2!.objects.forEach((obj) => {
      const computer = this.addItem(computer2, obj) as ComputerItem;
      computer.setComputerPage(PageKey.BACKGROUND);
    });
    const computer3 = this.physics.add.staticGroup({
      classType: ComputerItem,
    });

    const computerLayer3 = this.map.getObjectLayer(LayerKey.COMPUTER3_OBJLAYER);

    computerLayer3!.objects.forEach((obj) => {
      const computer = this.addItem(computer3, obj) as ComputerItem;
      computer.setComputerPage(PageKey.HOME);
    });
    const computer4 = this.physics.add.staticGroup({
      classType: ComputerItem,
    });
    const computerLayer4 = this.map.getObjectLayer(LayerKey.COMPUTER4_OBJLAYER);

    computerLayer4!.objects.forEach((obj) => {
      const computer = this.addItem(computer4, obj) as ComputerItem;
      computer.setComputerPage(PageKey.PROJECT);
    });
    const computer5 = this.physics.add.staticGroup({
      classType: ComputerItem,
    });

    const computerLayer5 = this.map.getObjectLayer(LayerKey.COMPUTER5_OBJLAYER);

    computerLayer5!.objects.forEach((obj) => {
      const computer = this.addItem(computer5, obj) as ComputerItem;
      computer.setComputerPage(PageKey.NONE);
      computer.testMsg("BGM OFF");
    });

    this.addObjet(LayerKey.DECORATION_OBJLAYER, false);
    this.addObjet(LayerKey.COFFEE_OBJLAYER, true);
    this.addObjet(LayerKey.CHAIR_OBJLAYER, false);

    this.physics.add.overlap(
      this.playerSelector,
      [computer1, computer2, computer3, computer4, computer5],
      this.onItemOverlap,
      undefined,
      this
    );

    //test
    emitter.on(EventKey.SELECTED, (selectedItem: ComputerItem) => {
      this.removeOldObject(computer5, selectedItem);
      selectedItem.clearNameBox();

      console.log(computer5.getLength());

      let bgm: boolean;

      isBgmOn.subscribe((data: boolean) => {
        bgm = data;
      });

      let id = bgm! ? 169 : 170;
      AudioManager.playBGM(!bgm!);
      console.log(id);
      computerLayer5!.objects.forEach((obj) => {
        const computer = this.testAddItem(computer5, obj, id) as ComputerItem;
        computer.setComputerPage(PageKey.NONE);
        computer.testMsg(`BGM ${bgm! ? "OFF" : "ON"}`);
      });

      isBgmOn.set(!bgm!);
    });
  }

  removeOldObject(
    group: Phaser.Physics.Arcade.StaticGroup,
    oldObject: ComputerItem // 以前のオブジェクト
  ) {
    group.remove(oldObject, true, true); // オブジェクトを削除し、破棄する
  }

  private onItemOverlap(playerSelector: any, selectionItem: any) {
    const currentItem = playerSelector.selectedItem as Item;
    // currentItem is undefined if nothing was perviously selected
    if (currentItem) {
      // if the selection has not changed, do nothings
      if (
        currentItem === selectionItem ||
        currentItem.depth >= selectionItem.depth
      ) {
        return;
      }
    }

    // set selected item and set up new dialog
    playerSelector.selectedItem = selectionItem;
    selectionItem.onOverlapDialog();
  }

  private addItem(
    group: Phaser.Physics.Arcade.StaticGroup,
    object: Phaser.Types.Tilemaps.TiledObject
  ) {
    const x = object.x! + object.width! * 0.5;
    const y = object.y! - object.height! * 0.5;

    const obj = group.get(x, y, MapKey.MAPIMG, object.gid! - 1).setDepth(y);
    return obj;
  }

  private testAddItem(
    group: Phaser.Physics.Arcade.StaticGroup,
    object: Phaser.Types.Tilemaps.TiledObject,
    id: number
  ) {
    const x = object.x! + object.width! * 0.5;
    const y = object.y! - object.height! * 0.5;

    const obj = group.get(x, y, MapKey.MAPIMG, id).setDepth(y);
    return obj;
  }

  private addObjet(object_key: string, collision: boolean) {
    const staticGroup = this.physics.add.staticGroup();
    const objLayer = this.map.getObjectLayer(object_key);
    let theObj: any;
    if (!objLayer) return;
    objLayer.objects.forEach((obj) => {
      //calcualte the offset of the object
      const x = obj.x! + obj.width! * 0.5;
      const y = obj.y! - obj.height! * 0.5;

      //Display the object on the game scene
      staticGroup.get(x, y, MapKey.MAPIMG, obj.gid! - 1).setDepth(y);
    });

    if (collision) {
      this.physics.add.collider(this.player, staticGroup);
    }
  }

  private spaceKeyPressed = false;
  update(time: number, delta: number) {
    if (this.player) {
      this.player.update(this.cursor, this.keySpace, this.playerSelector);
      this.playerSelector.update(this.player, this.cursor!);
    }
  }
}
