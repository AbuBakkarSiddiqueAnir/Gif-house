<script>
  import Favorite from "./Favorite.svelte";

    export let gifs;
    console.log(gifs)
</script>

<div class="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each gifs as gif}
      <div class="rounded-lg max-w-[300px] overflow-hidden">
        <Favorite/>
        <img src={gif} alt='' class="w-full h-auto" />
      </div>
    {/each}
  </div>



