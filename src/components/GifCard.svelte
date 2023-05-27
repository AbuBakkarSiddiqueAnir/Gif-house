<script>
    export let gif;
    let isActive = false;

function toggleHeart() {
  isActive = !isActive;
}
</script>

<div class='max-w-sm'>
    <div class="rounded-lg group relative masonry-item  max-w-[300px] overflow-hidden">
        <img src={gif} alt='' class="w-full h-auto" />
        <div class='absolute top-[30%] hidden group-hover:block  right-[35%]'>
            <button class={`heart ${isActive ? 'is-active':''}`} on:click={toggleHeart}></button>
        </div>
      </div>
</div>

<style>
    .heart {
      width: 100px;
      height: 100px;
      background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
      background-position: 0 0;
      cursor: pointer;
      transition: background-position 1s steps(28);
      transition-duration: 0s;
    }

    .heart.is-active {
      transition-duration: 1s;
      background-position: -2800px 0;
    }
  </style>