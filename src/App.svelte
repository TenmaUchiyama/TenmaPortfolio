<script lang='ts'>
import Monitor from "./components/Monitor.svelte";
import Project from "./components/ProjectPage.svelte";
import Background from "./components/BackgroundPage.svelte";
import Home from "./components/HomePage.svelte";
import { isMonitorOpen, openPage } from "./store/store";
import { PageKey } from "./types/SvelteKey";
import HobbyPage from "./components/HobbyPage.svelte";
import HomePage from "./components/HomePage.svelte";



const pages = {
   [PageKey.HOME] : HomePage, 
   [PageKey.BACKGROUND] : Background,
   [PageKey.PROJECT] : Project,
   [PageKey.HOBBY] : HobbyPage
}

window.onkeydown = (e) => {
   if(e.code ===  "Space"){
      console.log($isMonitorOpen)
   if($isMonitorOpen)
   {
      isMonitorOpen.closePage()
   }
}
}
</script>


{#if $isMonitorOpen && $openPage !== PageKey.NONE}
<Monitor>
   <svelte:component this={pages[$openPage]}/>
</Monitor>
{/if}
