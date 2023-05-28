<script lang="ts">
  import { FavoritesStore } from "../../gifstore";
  import GifGrid from "../../components/GifGrid.svelte";
</script>

<section class="w-full">
  <div class=" flex gap-3 flex-col">
    <header class="w-full flex justify-between items-center my-8">
      <h1
        class="text-5xl whitespace-nowrap logo font-bold"
        style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      >
        FAVORITES GIFS
      </h1>
    </header>
    <div class="w-full">
      <GifGrid
        count={0}
        page="favorite"
        fetchSearchGif={() => {}}
        loading={false}
        gifs={$FavoritesStore}
      />
    </div>
  </div>
</section>
