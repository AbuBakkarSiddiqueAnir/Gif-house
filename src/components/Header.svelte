<script lang="ts">
	import type { GifObject } from './../types/interface';
  import { searchGif } from '../utils/request';
  import { GifHouseStore, SearchPageGifOffset } from '../gifstore';
  import { crossfade } from './crossFade';
  export let loading:boolean;
  export let searchTerm:string;

    let isInputFocused = false;

    const handleFocus = () => {
      isInputFocused = true;
      document.querySelector('.header')?.classList.add('input-focused');
    }

    const handleBlur = () => {
      isInputFocused = false;
      document.querySelector('.header')?.classList.remove('input-focused');
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
    }
    const [send, receive] = crossfade
  </script>


  <div class="w-full flex justify-between flex-col mb-5 transition-all duration-300  {`header ${isInputFocused ? 'input-focused ' : ''}`}">

    <h1   class="text-8xl whitespace-nowrap  logo font-bold" style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Gif House
    </h1>

    <div class="flex justify-between items-center w-full gap-6 mt-5">
      <div class="relative w-full" in:receive='{{key:'input'}}' out:send='{{key:'input'}}'   >
        <input
        class='w-full p-[0.7rem] transition-all border-1 border-solid outline-none  border-gray-500 duration-300 ease-in'
        type="text"
        placeholder="Type here..."
        bind:value={searchTerm}
        on:keyup={enterKeyHandler}
        on:focusin={handleFocus}
        on:focusout={handleBlur}
      />
      <button on:click={gifSearchHandler} class="search absolute right-1 top-1">
        <img class="w-[40px]" src="/search.svg" alt="">
      </button>
      </div>
    </div>
  </div>
  <style>



    .input-field {
      width: 500px;
      padding: 0.5rem;
      border: 1px solid gray;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .input-field:focus {
      width: 800px;
      outline: none;
      box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
    }




  </style>