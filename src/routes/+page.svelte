<script lang="ts">
  import { onMount } from 'svelte';
import GifGrid from '../components/GifGrid.svelte';
import Header from '../components/Header.svelte';
import {
    GifHouseStore
} from '../gifstore';
  import Typer from '../components/Typer.svelte';

  $: loading = false;

</script>

<div class='w-7xl mx-auto mt-5 flex flex-wrap'>
    <Header loading={loading}/>
    {#if $GifHouseStore.length > 1}
        <GifGrid loading={loading} gifs={$GifHouseStore}/>
    {:else}
     <Typer/>
    {/if}

 </div>
