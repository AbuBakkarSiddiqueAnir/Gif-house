<script lang='ts'>
	import GifCard from './GifCard.svelte';
  export let gifs : [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
    {#each gifs as gif, i}
      <GifCard gif={gif} i={i}/>
    {/each}
</div>
