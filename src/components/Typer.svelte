
/**
 * Typewriter Component
 * A Svelte component that displays a typewriter effect for a phrase.
 * @component
 * @prop {'string'} phrase - The phrase to be displayed with the typewriter effect.
 * @prop {'string'} typeChars - The currently typed characters in the phrase.
 * @prop {'number'} index - The current index of the character being typed.
 * @prop {'number'} typeWritter - The interval ID of the typewriter effect.
 * @method {'function'} typeChar - A helper function that types a character from the phrase.
 * @method {'function'} typing - Starts the typewriter effect by calling `typeChar` repeatedly.
 */

<script lang="ts">
  import { onMount } from "svelte";
  let phrase: string =
    "🔍 Search the Gif you would like to Watch here, you can add your favorite gif to your personalized list..!!😍";
  let typeChars: string = "";
  let index: number = 0;
  let typeWritter: number;

  const typeChar = () => {
    if (index < phrase?.length) {
      typeChars += phrase[index];
      index++;
    } else {
      typeChars = "";
      index = 0;
    }
  };

  const typing = () => (typeWritter = setInterval(typeChar, 100));

  onMount(() => {
    typing();
  });
</script>

<section class="w-full">
  <div class="max-w-4xl">
    <p
      class="italic text-gray-400 text-2xl md:text-3xl font-normal tracking-wider leading-9"
    >
      {typeChars}
    </p>
  </div>
</section>
