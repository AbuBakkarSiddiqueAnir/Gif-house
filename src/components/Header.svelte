<script lang="ts">
	import type { GifObject } from './../types/interface';

  import { searchGif } from '../utils/request';
  import { GifHouseStore } from '../gifstore';
    let isInputFocused = false;
    const handleFocus = () => {
      isInputFocused = true;
      document.querySelector('.header')?.classList.add('input-focused');
    }

    const handleBlur = () => {
      isInputFocused = false;
      document.querySelector('.header')?.classList.remove('input-focused');
    }

    export let value = '';

    let timerId:any;

    function debounce(func:Function) {
      return function (...args:any[]) {
        if (timerId) {
          clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
          func(...args);
          timerId = null;
        }, 500);
      };
    }

     const handleInputChange = async (event: { target: { value: string }; }) => {
      if(event.target.value.length > 2){
        gifSearchHandler(event.target.value)
      }
    }

    const gifSearchHandler = async (searchTerm:string) => {
      const gifs = await searchGif(searchTerm);
       const gifsToStore = gifs.data.map((gif : GifObject) => {
        console.log(gif)
            return {
                id: gif.id,
                gif_url: gif.images['original'].webp,
                title: gif.title
            }
       })
       GifHouseStore.set(gifsToStore);
    }

  </script>

  <div class="w-full flex justify-center {`header ${isInputFocused ? 'input-focused h-[10rem]' : 'h-[22rem]'}`}">
    <h1 class="text-8xl logo font-bold" style="background-image: linear-gradient(to right, red, blue); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Gif House
      </h1>
    <div class="input-container">
      <input
        class="input-field"
        bind:value={value}
        type="text"
        placeholder="Type here..."
        on:change={debounce(handleInputChange)}
        on:focusin={handleFocus}
        on:focusout={handleBlur}
      />
    </div>
  </div>
  <style>
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s ease;
      transform: translateY(0);
    }

    .input-container {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }

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

    .logo {
      transition: all 0.3s ease;
    }

    .input-focused .logo {
      font-size: 60px;
      transform: translateY(-20px);
    }


  </style>