import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@svelte": path.resolve(__dirname, "./src/svelte-components"),
      "@phaser": path.resolve(__dirname, "./src/phaser-components"),
      "@page-contents": path.resolve(__dirname, "./pageContents"),
    },
  },
});
