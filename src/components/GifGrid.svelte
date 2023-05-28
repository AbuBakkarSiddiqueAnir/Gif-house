
/**
 * Component: Gif Container
 *
 * This component displays a container for GIFs. It can render either a loading state
 * with skeleton placeholders or the actual GIF cards. The component supports infinite
 * scrolling when used on the home or trending pages. The 'gifs' prop contains an array
 * of GIF objects to be rendered. The 'loading' prop indicates whether the GIFs are being
 * loaded. The 'count' prop represents the current count of loaded GIFs. The 'fetchSearchGif'
 * prop is a function to fetch more GIFs. The 'page' prop specifies the current page. The
 * 'hasMore' prop indicates whether there are more GIFs available to load.
 *
 * Props:
 * - gifs: An array of GIF objects to be rendered.
 * - loading: A boolean indicating whether the GIFs are being loaded.
 * - count: The current count of loaded GIFs.
 * - fetchSearchGif: A function to fetch more GIFs.
 * - page: The current page.
 * - hasMore: A boolean indicating whether there are more GIFs available to load.
 */

<script lang="ts">
  import InfiniteScroll from "./InfiniteScroll.svelte";
  import GifCard from "./GifCard.svelte";
  import Skeleton from "./Skeleton.svelte";
  import type { Gif } from "../types/types";

  export let gifs: Gif;
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
