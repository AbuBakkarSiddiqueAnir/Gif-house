<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Gif } from '../types/types';
  import { onMount } from 'svelte';

  export let gif: Gif;
  export let i: number;
  let favorite = true;
  let show = false;

  onMount(() => {
    show = true;
  });
</script>

<div class=" relative overflow-hidden rounded-lg group" transition:fade={{delay:i*100}}>
  <button class="absolute top-2 right-2 bg-red-600 font-bold text-white px-4 py-2 rounded-full shadow-lg transform translate-x-[150%] transition-transform duration-300 ease group-hover:translate-x-[0]">
    {#if favorite}
    Added
{:else}
    Add
{/if} to favorites
  </button>
  <div class=" absolute bottom-0 text-white w-full px-4 py-2 bg-gradient-to-t from-transparent to-black group-hover:translate-x-[0%]  bg-opacity-50 text-shadow-md transform translate-x-[-150%] transition-transform duration-300 ease">
      {gif.title}
  </div>
  <img src={gif.gif_url} alt="card" class="w-full h-full object-cover aspect-w-1 aspect-h-1.5 rounded-lg" />
</div>
