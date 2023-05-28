<script lang="ts">

    import { FavoritesStore } from '../../gifstore';
    import GifGrid from '../../components/GifGrid.svelte';

  </script>

  <section class='w-full'>
  <div class=' flex gap-3 flex-col'>
      <header class='w-full flex justify-between items-center my-8'>
          <h1 class="text-5xl whitespace-nowrap  logo font-bold" style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            FAVORITES GIFS
          </h1>
          <button type="button" class="text-white bg-gradient-to-br from-red-600 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-lg px-5 h-10">Refresh Trendings</button>
      </header>
      <div class='w-full'>
          <GifGrid loading={false} gifs={$FavoritesStore}/>
      </div>

  </div>
  </section>
