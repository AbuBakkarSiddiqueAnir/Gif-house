import { writable } from "svelte/store";
import type { Gif } from "./types/types";

import { browser } from "$app/environment";
export let FavoritesStore = writable<Gif[]>([]);

if (browser) {
  FavoritesStore = writable<Gif[]>(
    localStorage?.getItem("favorites_gif")
      ? JSON.parse(localStorage.getItem("favorites_gif"))
      : []
  );
}
export const GifHouseStore = writable<Gif[]>([]);
export const TrendingGifsStore = writable<Gif[]>([]);
export const SearchPageGifOffset = writable<number>(0);
export const TrendingPageGifOffset = writable<number>(0);
export const SearchGifLimit = writable<number>(100);
export const TrendingGifLimit = writable<number>(100);
