<script lang='ts'>
import Monitor from "./components/Monitor.svelte";
import Project from "./components/ProjectPage.svelte";
import Background from "./components/BackgroundPage.svelte";
import HobbyPage from "./components/SkillPage.svelte";
import HomePage from "./components/HomePage.svelte";
import { isMonitorOpen, currentPage , isOnLoading, loadingProgress, isDesktop} from "./store/store";
import { PageKey } from "./types/SvelteKey"
import { onMount } from "svelte";
import Joystick from "./components/Joystick.svelte";





let isDesktopDevice : boolean = false
onMount(()=> {
/* Storing user's device details in a variable*/
let details = navigator.userAgent;

/* Creating a regular expression  
  containing some mobile devices keywords  
  to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details 
  it returns boolean value*/
isDesktopDevice = !regexp.test(details);

isDesktop.set(isDesktopDevice)
})



const pages = {
   [PageKey.HOME] : HomePage, 
   [PageKey.BACKGROUND] : Background,
   [PageKey.PROJECT] : Project,
   [PageKey.HOBBY] : HobbyPage
}



</script>



<!-- svelte-ignore empty-block -->
{#if $isOnLoading}
   <div class="loading">
      <img src="/logo.svg" alt="" class='logo'>
      <h2 style="color: white;">Loading...</h2>
      

      <div class="loader">
         <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="progress" style="width: 40vw;">
            <div class="progress-bar" role="progressbar" style="width: {$loadingProgress}%;"></div>
          </div>
      </div>
   </div>
{/if}

{#if $isMonitorOpen && $currentPage !== PageKey.NONE}
<Monitor>
   <svelte:component this={pages[$currentPage]}/>
</Monitor>
{/if}


{#if !isDesktopDevice}
<Joystick/>
{/if}
<style>
   .loading{
      position: relative;
      width: 100vw;
      height: 100vh;
      background-color: rgba(29, 29, 29, 0.99);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }




   .loading img{
      width: 10%;
   }


   .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
   }

</style>