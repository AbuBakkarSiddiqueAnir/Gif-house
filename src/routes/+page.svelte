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

  $: loading = false;
  const paginateScroll = (count:number) =>{
    count += 30
    SearchPageGifOffset.set(count)
    fetchSearchMoreGif('bird', count)
  }

</script>

<div class='w-7xl mx-auto mt-5 flex flex-wrap'>
    <Header loading={loading}/>
    {#if $GifHouseStore?.length > 1}
        <GifGrid count={$SearchPageGifOffset} fetchSearchGif={paginateScroll} loading={loading} gifs={$GifHouseStore}/>
    {:else}
     <Typer/>
    {/if}

 </div>
