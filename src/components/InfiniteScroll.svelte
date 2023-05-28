<!-- /**
 * Component: InfiniteScroll
 * This component enables infinite scrolling behavior by detecting when the user
 * has scrolled near the bottom of a scrollable container. It emits a 'loadMore'
 * event when the threshold is reached, indicating that more content should be loaded.
 *
 * Props:
 * - threshold: The distance from the bottom (in pixels) at which the 'loadMore' event should be emitted.
 * - horizontal: A boolean indicating whether the scrolling should be horizontal (true) or vertical (false).
 * - hasMore: A boolean indicating whether there is more content available to load.
 *
 * Events:
 * - loadMore: Triggered when the threshold is reached and more content should be loaded.
 */ -->

<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from "svelte";

  export let threshold = 0;
  export let horizontal = false;
  export let hasMore = true;
  let elementScroll: HTMLElement | null;

  const dispatch = createEventDispatcher();
  let isLoadMore = false;
  let component: HTMLElement | null;

  onMount(() => {
    if (component || elementScroll) {
      const element = elementScroll || (component?.parentNode as HTMLElement);
      element.addEventListener("scroll", onScroll);
      element.addEventListener("resize", onScroll);
    }
  });

  const onScroll = (e: Event) => {
    const element = e.target as HTMLElement;

    const offset = horizontal
      ? element.scrollWidth - element.clientWidth - element.scrollLeft
      : element.scrollHeight - element.clientHeight - element.scrollTop;

    if (offset <= threshold) {
      if (!isLoadMore && hasMore) {
        dispatch("loadMore");
      }
      isLoadMore = true;
    } else {
      isLoadMore = false;
    }
  };

  onDestroy(() => {
    if (component || elementScroll) {
      const element = elementScroll || (component?.parentNode as HTMLElement);

      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("resize", onScroll);
    }
  });
</script>

<div bind:this={component} style="width:0px" />
