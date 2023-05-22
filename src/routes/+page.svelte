<script>
import {fetchGif, gifHouse} from '../gifstore'

fetchGif()
</script>

<div class='w-7xl mx-auto flex flex-wrap'>
    {#each $gifHouse as gif}
        <div>
            <img src={gif} alt="">
        </div>
    {/each}
</div>
