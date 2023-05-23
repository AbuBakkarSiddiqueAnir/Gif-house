<script>
  import GifGrid from '../components/GifGrid.svelte';
import Header from '../components/Header.svelte';
import { gifHouse} from '../gifstore'

</script>

<div class='w-7xl mx-auto flex flex-wrap'>
    <Header/>
    <GifGrid gifs={$gifHouse}/>
</div>
