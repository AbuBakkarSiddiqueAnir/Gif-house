<script lang="ts">
	import { SearchPageGifOffset } from './../gifstore';
  import { onMount } from 'svelte';
import GifGrid from '../components/GifGrid.svelte';
import Header from '../components/Header.svelte';
import {
  GifHouseStore,
} from '../gifstore';
  import Typer from '../components/Typer.svelte';
  import { fetchSearchMoreGif } from '../utils/request.js';

  $: searchTerm = '';
  $: loading = false;

  const paginateScroll = (count:number) =>{
    if(searchTerm?.length < 2) return
    count += 30
    SearchPageGifOffset.set(count)
    fetchSearchMoreGif(searchTerm, count)
  }

</script>

<div class='w-7xl mx-auto mt-5 flex flex-wrap'>
    <Header bind:loading={loading} bind:searchTerm={searchTerm}/>
    {#if $GifHouseStore?.length > 1}
        <GifGrid page='home' count={$SearchPageGifOffset} fetchSearchGif={paginateScroll} bind:loading={loading} gifs={$GifHouseStore}/>
    {:else}
     <Typer/>
    {/if}

 </div>
