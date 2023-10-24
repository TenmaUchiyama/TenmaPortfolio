<script lang='ts'>

  

    import Layout from "./Layout.svelte";
    import { isDesktop, isMonitorOpen } from "../store/store";


    let contentDiv : HTMLDivElement


    const onwheel = (e : WheelEvent) => {
        if(!$isMonitorOpen) return
        e.preventDefault(); 
 

        const sensitivity = 0.5

        contentDiv.scrollTop += e.deltaY * sensitivity;
    }


    const onSpaceKeyPressed = (event : KeyboardEvent) => {
   if(event.code ===  "Space"){
      isMonitorOpen.closePage()
}
}

    
    </script>
    
    
    <svelte:window on:wheel={onwheel} on:keydown={onSpaceKeyPressed}></svelte:window>
   



    <div class="monitor-container" >
        {#if $isDesktop}
        <h2>Press Space To Go Back</h2>
        {:else}
        <svg on:touchstart={()=>{isMonitorOpen.closePage()}} class='close-btn' viewBox="0 0 2050 2050" data-name="Layer 3" id="Layer_3" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#000000;}</style></defs><title></title><path class="cls-1" d="M1582.2,1488.7a44.9,44.9,0,0,1-36.4-18.5l-75.7-103.9A431.7,431.7,0,0,0,1121.4,1189h-60.1v64c0,59.8-33.5,112.9-87.5,138.6a152.1,152.1,0,0,1-162.7-19.4l-331.5-269a153.5,153.5,0,0,1,0-238.4l331.5-269a152.1,152.1,0,0,1,162.7-19.4c54,25.7,87.5,78.8,87.5,138.6v98.3l161,19.6a460.9,460.9,0,0,1,404.9,457.4v153.4a45,45,0,0,1-45,45Z"></path></g></svg>
        {/if}
        <div class="tv">
            <div class="screen">
                <div class="content" bind:this={contentDiv}>
                   <Layout>
                     <slot></slot>
                   </Layout>
                </div>
            </div>
           
        </div>
    
    </div>

    
    <style>

        h2{
            color: white;
        }
        .monitor-container {
            background-color: rgba(80, 80, 80, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            margin: 0;
    
        }
    
        .tv {
            width: 80vw; /* 画面の幅を調整 */
            height: 80vh; /* 画面の高さを調整 */
            border: 20px solid #000; /* フレームのスタイル */
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); /* 画面に影を追加 */
            background: #000; /* 画面の背景色 */
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }
    
        .screen {
            width: 100%;
            height: 100%;
            background: white; /* 画面内の表示色 */
            position: relative;
        }
    
        .content {
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 3%, rgba(255, 255, 255, 0.2) 3%, transparent 10%); /* ノイズパターン */
            background-size: 10px 10px;
            position: absolute;
            overflow: auto;
            padding: 20px;
        }
        
        .close-btn
        {
            position: fixed;
            top: 0;
            left: 0;
            width: 9vw;
        }
    
       
    </style>
    