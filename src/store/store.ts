import { writable } from "svelte/store";
import { PageKey } from "../types/SvelteKey";
import Game from "@phaser/scene/Game";
import phaserGame from "@/PhaserGame";
import AudioManager from "@phaser/audio/Audio";

export const isDesktop = writable<boolean>(true);

export const isOnLoading = writable<boolean>(true);

export const loadingProgress = writable<number>(0);

export const displayLanguage = writable<string>("ja");

export const currentPage = writable<PageKey>(PageKey.NONE);

export const isBgmOn = writable<boolean>(false);

function monitorOpen() {
  const { subscribe, set, update } = writable<boolean>(false);

  return {
    subscribe,
    openPage: () => {
      update((isOpen) => {
        const game = phaserGame.scene.keys.game as Game;
        game.disableKeys();
        AudioManager.playMonitor();
        AudioManager.playPC(true);
        return true;
      });
    },
    closePage: () => {
      update((isOpen) => {
        const game = phaserGame.scene.keys.game as Game;
        game.enableKeys();
        AudioManager.playPC(false);
        return false;
      });
    },
    togglePage: () => {
      update((isOpen) => {
        if (isOpen) {
          const game = phaserGame.scene.keys.game as Game;
          game.enableKeys();
          return false;
        } else {
          const game = phaserGame.scene.keys.game as Game;
          game.disableKeys();
          return true;
        }
      });
    },
  };
}
export const isMonitorOpen = monitorOpen();
