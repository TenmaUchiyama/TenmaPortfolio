import { writable } from "svelte/store";
import { PageKey } from "../types/SvelteKey";
import Game from "../scene/Game";
import phaserGame from "../PhaserGame";
import AudioManager from "../audio/Audio";

// export const isMonitorOpen = writable<boolean>(false);

export const displayLanguage = writable<string>("ja");

export const openPage = writable<PageKey>(PageKey.NONE);

function openPageTest() {
  const { subscribe, set, update } = writable<boolean>(true);

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

export const isMonitorOpen = openPageTest();
