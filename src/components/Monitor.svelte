<script lang='ts'>

  

    import Layout from "./Layout.svelte";
    import { isMonitorOpen } from "../store/store";


    let contentDiv : HTMLDivElement


    const onwheel = (e : WheelEvent) => {
        if(!$isMonitorOpen) return
        e.preventDefault(); 
 

        const sensitivity = 0.5

        contentDiv.scrollTop += e.deltaY * sensitivity;
    }



    
    </script>
    
    
    <svelte:window on:wheel={onwheel}></svelte:window>



    <div class="monitor-container" >
        <h2>Press Space To Go Back</h2>
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
    
    
       
    </style>
    