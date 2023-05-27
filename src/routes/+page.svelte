<script lang="ts">
  import { onMount } from 'svelte';
import GifGrid from '../components/GifGrid.svelte';
import Header from '../components/Header.svelte';
import {
    GifHouseStore
} from '../gifstore';
  import Typer from '../components/Typer.svelte';
  import Head from '../components/Head.svelte';

</script>

<div class='w-7xl mx-auto flex flex-wrap'>
    <!-- <Header/>
    {#if $GifHouseStore.length > 1}
    <GifGrid gifs={$GifHouseStore}/>
{:else}
    <Typer/>
{/if} -->

<Head/>

 </div>
