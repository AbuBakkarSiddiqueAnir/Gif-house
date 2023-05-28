<script lang="ts">
	import { onMount } from 'svelte';
    let phrase:string = '🔍 Search the Gif you would like to see here, you can add your favorite gif to your personalized list..!!😍'
    let typeChars:string = '';
    let index:number = 0;
    let typeWritter:number;


    const typeChar = () => {
        if(index < phrase?.length) {
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
    <div class="max-w-4xl">
        <p class="italic text-gray-400  text-3xl font-normal tracking-wider leading-9">{typeChars}</p>
    </div>
</section>