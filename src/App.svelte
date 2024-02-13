<script lang='ts'>
import Monitor from "@svelte/Monitor.svelte";
import Project from "@svelte/pages/ProjectPage.svelte";
import Background from "@svelte/pages/BackgroundPage.svelte";
import HobbyPage from "@svelte/pages/SkillPage.svelte";
import HomePage from "@svelte/pages/HomePage.svelte"
import MobileScreen from "@svelte/MobileScreen.svelte";
import HomePageMobile from "@svelte/mobilePages/HomePageMobile.svelte";
import { isMonitorOpen, currentPage , isOnLoading, loadingProgress, isDesktop} from "./store/store";
import { PageKey } from "./types/SvelteKey"
import { onMount } from "svelte";
import Joystick from "@svelte/Joystick.svelte";



let pages:any;
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
  
pages = {
   [PageKey.HOME] : isDesktopDevice ? HomePage : HomePageMobile, 
   [PageKey.BACKGROUND] : Background,
   [PageKey.PROJECT] : Project,
   [PageKey.HOBBY] : HobbyPage
}
isDesktop.set(isDesktopDevice)
})





  


</script>



<!-- svelte-ignore empty-block -->
{#if $isOnLoading}
   <div class="loading">
      <h1>Whelcome to Tenma's Domain</h1>
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

{#if isDesktopDevice}
<Monitor>
   <svelte:component this={pages[$currentPage]}/>
</Monitor>
{:else}
<MobileScreen>
   <svelte:component this={pages[$currentPage]}/>
</MobileScreen>
{/if}
{/if}


{#if !isDesktopDevice}
<Joystick/>
{/if}


<style>



h1{
   color: white; 
   text-align: center;
}
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


	



   .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
   }


   @media(max-width: 500px)
	{
		
      .loading img{
      width: 40%;
   }


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


   .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
   }

	}


</style>