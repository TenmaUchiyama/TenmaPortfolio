<script>
import Layout from '@svelte/Layout.svelte'

</script>


<div class='mobile-screen'>
    

<Layout>
    <slot></slot>
</Layout>

</div>





<style>

    .mobile-screen{
        width: 100vw;
        height: 100vh;
        background-color: white;
       
    }


</style>