<script lang="ts">
import GifGrid from '../components/GifGrid.svelte';
import Header from '../components/Header.svelte';
import {
    gifHouse
} from '../gifstore'
import {
    fetchGif
} from '../utils/request';
(async () => {
    const results = await fetchGif('cat')
    const gifs = results.data.map((gif: object) => gif.images['original'].webp);
    gifHouse.set(gifs);
})()
</script>

<div class='w-7xl mx-auto flex flex-wrap'>
    <Header/>
        <GifGrid gifs={$gifHouse}/>
            </div>
