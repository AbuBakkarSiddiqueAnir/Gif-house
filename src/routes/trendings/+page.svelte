<script lang="ts">


  import { trendingGifs } from "../../utils/request";
  import { TrendingGifsStore } from "../../gifstore";



</script>

<section class='w-full'>
<div class=' flex gap-3 flex-col'>
    <header class='w-full flex justify-between items-center mt-3'>
        <h1 class='text-4xl mt-8 leading-9 font-semibold text-lime-500'>TRENDING GIFS</h1>
        <button type="button" class="text-white bg-gradient-to-br from-lime-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-lg px-5 h-10">Refresh Trendings</button>

    </header>
    <div class='w-full'>
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto'>
            {#each $TrendingGifsStore as gif, i}
            <!-- <Card gif={gif} i={i}/> -->
          {/each}
        </div>

    </div>

</div>
</section>