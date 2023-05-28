<script lang="ts">
  import { onMount } from "svelte";
  import { SearchPageGifOffset } from "./../gifstore";
  import GifGrid from "../components/GifGrid.svelte";
  import Header from "../components/Header.svelte";
  import { GifHouseStore } from "../gifstore";
  import Typer from "../components/Typer.svelte";
  import { fetchSearchMoreGif } from "../utils/request.js";

  $: searchTerm = "";
  $: loading = false;

  const paginateScroll = (count: number) => {
    if (searchTerm?.length < 2) return;
    count += 30;
    SearchPageGifOffset.set(count);
    fetchSearchMoreGif(searchTerm, count);
  };
</script>

<div class="w-7xl mx-auto mt-0 flex flex-wrap">
  <Header bind:loading bind:searchTerm />
  {#if $GifHouseStore?.length > 1}
    <GifGrid
      page="home"
      count={$SearchPageGifOffset}
      fetchSearchGif={paginateScroll}
      bind:loading
      gifs={$GifHouseStore}
    />
  {:else}
    <Typer />
  {/if}
</div>
