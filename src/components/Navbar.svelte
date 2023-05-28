<!--
/**
 * Component: Navbar
 *
 * This component represents the navigation bar at the top of the page.
 * It includes links to the home, favorites, and trendings pages.
 * The number of favorites is passed as the prop 'noOfFavorites'.
 */ -->

<script lang="ts">
  import { scale } from "svelte/transition";
  import { FavoritesStore } from "../gifstore";

  export let noOfFavorites = 0;
</script>

<nav
  class="flex w-full items-center justify-end bg-gray-800 py-8 px-12 sticky top-0 z-40"
>
  <div class="flex space-x-7">
    <a href="/" class="text-gray-300 text-sm hover:text-white leading-3">HOME</a
    >
    <a
      href="/favorites"
      class="text-gray-300 text-sm hover:text-white block relative leading-3"
      >FAVORITES
      <div
        class="w-[1rem] bg-gray-900 -top-4 -right-5 h-[1rem] absolute flex justify-center items-center p-3 text-sm font-bold text-red-100 rounded-[50%]"
      >
        {#key noOfFavorites}
          <span in:scale>{$FavoritesStore ? $FavoritesStore?.length : 0}</span>
        {/key}
      </div>
    </a>
    <a
      href="/trendings"
      class="text-gray-300 text-sm leading-3 hover:text-white">TRENDINGS</a
    >
  </div>
</nav>
