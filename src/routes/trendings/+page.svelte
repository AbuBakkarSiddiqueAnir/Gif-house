<script lang="ts">

  import { fetchTrendingMoreGif, trendingGifs } from '../../utils/request';
  import { TrendingGifsStore, TrendingPageGifOffset } from '../../gifstore';
  import GifGrid from '../../components/GifGrid.svelte';

  const paginateScroll = (count:number) =>{
    fetchTrendingMoreGif( count)
    count += 30
    TrendingPageGifOffset.set(count)
  }

</script>

<section class='w-full'>
<div class=' flex gap-3 flex-col'>
    <header class='w-full flex justify-between items-center my-8'>
        <h1 class="text-5xl whitespace-nowrap  logo font-bold" style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          TRENDING GIFS
        </h1>
    </header>
    <div class='w-full'>
        <GifGrid count={$TrendingPageGifOffset} loading={false}  fetchSearchGif={paginateScroll}  page='trending' gifs={$TrendingGifsStore} />
    </div>
</div>
</section>
