<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Gif } from "../types/types";
  import { onMount } from "svelte";
  import { FavoritesStore } from "../gifstore";
  export let gif: Gif;
  export let i: number;
  let favorite = false;
  let show = false;

  const toggleFavorite = () => {
    const store: Gif[] = [...$FavoritesStore];
    let index: number;
    let isInStorage = store.find((g: Gif) => {
      let same = gif.id === g.id;
      if (same) {
        index = store.indexOf(g);
      }
      return same;
    });
    if (isInStorage) {
      store.splice(index, 1);
      favorite = false;
    } else {
      store.push(gif);
      favorite = true;
    }
    FavoritesStore.set(store);
    localStorage.setItem("favorites_gif", JSON.stringify(store));
  };

  onMount(() => {
    favorite = $FavoritesStore.find((g: Gif) => {
      return gif.id === g.id;
    });
    show = true;
  });
</script>

<div
  class=" relative overflow-hidden rounded-lg group min-h-[400px]"
  in:fade={{ delay: i * 80 }}
  out:fade
>
  <button
    on:click={toggleFavorite}
    class="absolute top-2 right-2 bg-red-600 font-bold text-white px-4 py-2 rounded-full shadow-lg transform translate-x-[150%] transition-transform duration-300 ease group-hover:translate-x-[0]"
  >
    {#if !favorite}
      Add to favorites
    {:else}
      remove From favorites
    {/if}
  </button>
  <div
    class=" absolute bottom-0 text-white w-full px-4 py-2 bg-gradient-to-t from-transparent to-black group-hover:translate-x-[0%] bg-opacity-50 text-shadow-md transform translate-x-[-150%] transition-transform duration-300 ease"
  >
    {gif.title}
  </div>
  <img
    src={gif.gif_url}
    alt="card"
    class="w-full h-full object-cover aspect-w-1 aspect-h-1.5 rounded-lg"
  />
</div>
