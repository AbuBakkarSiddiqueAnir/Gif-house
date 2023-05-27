
<script>
  import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment'
  let ele, p1, p2;
    if(browser) {
         ele = document?.getElementById('h1tag')
     p1 = document?.getElementById('p1')
     p2 = document?.getElementById('p2')
    }


    let isInputFocused = false;

    const handleFocus = () => {
      isInputFocused = true;
      document.querySelector('.header')?.classList.add('input-focused');
      p2?.prepend(ele)
    }

    const handleBlur = () => {
      isInputFocused = false;
      document.querySelector('.header')?.classList.remove('input-focused');
      p1?.append(ele)
    }

    const [send, receive] = crossfade({ duration: 2000 })
</script>


<div class="cont w-full flex flex-col justify-center">
    <div id="p1" in:receive='{{key:'h1'}}' out:send='{{key:'h1'}}' >
    </div>
    <div  id="p2" class="flex justify-center w-full"  >
        <h1 id="h1tag" class="text-[50px] text-center" in:receive='{{key:'h1'}}' out:send='{{key:'h1'}}' >Gif house</h1>
        <input type="text"
        on:focusin={handleFocus}
        on:focusout={handleBlur} class="w-[800px] h-8 mx-auto" name="" id="">
    </div>
</div>


<style>
    .cont {
        width: 100%;
        display: flex ;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        font-size: 40px;
        text-align: center;
    }
    #p2 {
        display: flex;
        justify-content: center;
        width:100%;
    }
    input {
        width:600px;
        height: 30px;
    }
</style>