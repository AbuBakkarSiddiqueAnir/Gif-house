<script lang='ts'>
	import GifCard from './GifCard.svelte';
  import Skeleton from './Skeleton.svelte';
  export let gifs : any;
  export let loading:boolean;
</script>




<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
  {#if loading}
     {#each new Array(20) as skeleton}
      <Skeleton/>
    {/each}
  {:else}
    {#each gifs as gif, i}
      <GifCard gif={gif} i={i}/>
    {/each}
  {/if}
</div>
