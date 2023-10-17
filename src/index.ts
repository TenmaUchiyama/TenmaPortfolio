import "./index.css";
import App from "./App.svelte";
import "./PhaserGame";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
