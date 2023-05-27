<script lang="ts">
	import { onMount } from 'svelte';
    let phrase:string = 'Search the Gif you would like to see here...'
    let typeChars:string = '';
    let index:number = 0;
    let typeWritter:number;


    const typeChar = () => {
        if(index < phrase.length) {
            typeChars += phrase[index];
            index++;
        } else {
            typeChars = '';
            index = 0;
        }
    }

    const typing = () => typeWritter = setInterval(typeChar, 100);

    onMount(() => {
        typing()
    })
</script>

<section class="w-full">
    <div class="max-w-lg mx-auto">
        <p class="italic text-red-900 text-4xl tracking-wider leading-9">{typeChars}</p>
    </div>
</section>