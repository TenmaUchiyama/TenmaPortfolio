import Phaser from "phaser";
import { AnimationKey, CharacterKey } from "../../types/PhaserKey";

export const createCharacterAnims = (
  anims: Phaser.Animations.AnimationManager
) => {
  const ANIMATION_FRAME = 15;
  anims.create({
    key: AnimationKey.IDLE,
    frames: anims.generateFrameNames(CharacterKey.STICKMAN, {
      start: 0,
      end: 5,
    }),
    repeat: -1,
    frameRate: ANIMATION_FRAME * 0.6,
  });

  anims.create({
    key: AnimationKey.RUN,
    frames: anims.generateFrameNames(CharacterKey.STICKMAN, {
      start: 6,
      end: 10,
    }),
    repeat: -1,
    frameRate: ANIMATION_FRAME,
  });

  anims.create({
    key: AnimationKey.PUNCH,
    frames: anims.generateFrameNames(CharacterKey.STICKMAN, {
      start: 16,
      end: 20,
    }),
    repeat: -1,
    frameRate: ANIMATION_FRAME * 0.6,
  });

  anims.create({
    key: AnimationKey.DEATH,
    frames: anims.generateFrameNames(CharacterKey.STICKMAN, {
      start: 25,
      end: 35,
    }),
    repeat: 0,
    frameRate: ANIMATION_FRAME * 0.5,
  });
};
