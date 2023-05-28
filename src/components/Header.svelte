<script lang="ts">
	import type { GifObject } from './../types/interface';
  import { searchGif } from '../utils/request';
  import { GifHouseStore, SearchPageGifOffset } from '../gifstore';
  import { crossfade } from './crossFade';
  export let loading:boolean;
  export let searchTerm:string;

    let isInputFocused = true;

    const handleFocus = () => {
      isInputFocused = true;
    }

    const handleBlur = () => {
      isInputFocused = false;
    }

    const enterKeyHandler = (event:KeyboardEvent) => {
      if(event.keyCode !== 13) return
      gifSearchHandler()
    }

    const gifSearchHandler = async () => {
      SearchPageGifOffset.set(0)
      loading = true;
      const gifs = await searchGif(searchTerm);
      const gifsToStore = gifs.data.map((gif : GifObject) => {
            return {
                id: gif.id,
                gif_url: gif.images['original'].webp,
                title: gif.title
            }
       })
       GifHouseStore.set(gifsToStore);
       loading = false;
       isInputFocused = false;
    }
    const [send, receive] = crossfade
  </script>


  <div class="w-full flex justify-between flex-col mb-5 transition-all duration-300 sticky top-[3rem] pb-4 z-40 bg-gray-800">

    <h1   class={` transition-all duration-700 whitespace-nowrap  logo font-bold ${!isInputFocused ? 'mt-[0px] text-5xl':'md:mt-[150px] mt-[100px] text-6xl md:text-8xl'}`} style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Gif House
    </h1>

    <div class="flex justify-between items-center w-full gap-6 mt-5">
      <div class={`relative w-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ${!isInputFocused ? "p-[2px]":"p-[3px]"}`}  >
        <input
        class={`w-full   transition-all border-1 border-solid outline-none bg-gray-800 text-gray-100  border-gray-900 duration-300 ease-in ${!isInputFocused ? ' p-[0.5rem]' :'p-[1rem] '}`}
        type="text"
        placeholder="Type here..."
        autofocus
        bind:value={searchTerm}
        on:keyup={enterKeyHandler}
        on:focusin={handleFocus}
        on:focusout={handleBlur}
      />
      <button on:click={gifSearchHandler} class="search absolute right-1 top-3">
        <img class={`transition-all duration-300 ${!isInputFocused ? 'w-[25px]':'w-[40px]'}`} src="/search.svg" alt="">
      </button>
      </div>
    </div>
  </div>
  <style>
  </style>