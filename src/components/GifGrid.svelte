<script lang="ts">
  import InfiniteScroll from "./InfiniteScroll.svelte";
  import GifCard from "./GifCard.svelte";
  import Skeleton from "./Skeleton.svelte";

  export let gifs: any;
  export let loading: boolean;
  export let count: number;
  export let fetchSearchGif: Function;
  export let page: string;
  export let hasMore: boolean;
</script>

<div
  id="gif-container"
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto overflow-y-scroll max-h-[1200px]"
>
  {#if loading}
    {#each new Array(20) as skeleton}
      <Skeleton />
    {/each}
  {:else}
    {#each gifs as gif, i}
      <GifCard {gif} {i} />
    {/each}

    {#if page === "home" || page === "trending"}
      <InfiniteScroll
        {hasMore}
        threshold={100}
        on:loadMore={() => fetchSearchGif(count)}
      />
    {/if}
  {/if}
</div>

<style>
  #gif-container::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  #gif-container {
    scrollbar-width: none;
  }
</style>
