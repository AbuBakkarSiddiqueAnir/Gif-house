<script lang="ts">
  import type { Gif } from "./../types/types";
  import type { GifObject } from "./../types/interface";
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { trendingGifs } from "../utils/request";
  import { TrendingGifsStore } from "../gifstore";
  onMount(async () => {
    const trendings = await trendingGifs();
    const gifsToStore: Gif[] = trendings.data.map((gif: GifObject) => {
      return {
        id: gif.id,
        gif_url: gif.images["original"].webp,
        title: gif.title,
      };
    });
    TrendingGifsStore.set(gifsToStore);
  });
</script>

<div class="w-full bg-gray-800 min-h-screen px-6">
  <Navbar />
  <main class=" max-w-7xl mx-auto">
    <slot />
  </main>
  <!-- <Footer/> -->
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@500;600;700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:wght@400;500;600;700&display=swap");

  /* @tailwind base;
  @tailwind components;
  @tailwind utilities; */

  * {
    font-family: "Open Sans", sans-serif;
  }
</style>
