// This module handles fetching and storing GIF data from the Giphy API.

import {
  GifHouseStore,
  SearchGifLimit,
  TrendingGifLimit,
  TrendingGifsStore,
} from "../gifstore";

import type { GifObject } from "../types/interface";
import type { Gif } from "../types/types";
import { PUBLIC_GIPHY_APIKEY } from "./env";
// import { PUBLIC_GIPHY_APIKEY } from "$env/static/public";

// Function to search for GIFs based on a search term
export const searchGif = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${PUBLIC_GIPHY_APIKEY}&q=${searchTerm}&limit=16`
  );
  return await res.json();
};

// Function to fetch additional search GIFs
export const fetchSearchMoreGif = async (
  searchTerm: string = "man",
  offset?: number
) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${PUBLIC_GIPHY_APIKEY}&q=${searchTerm}&offset=${offset}&limit=16`
  );
  const gifs = await res.json();
  const gifsToStore = gifs.data.map((gif: GifObject) => {
    return {
      id: gif.id,
      gif_url: gif.images["original"].webp,
      title: gif.title,
    };
  });
  SearchGifLimit.set(gifs.pagination.total_count); // Update the search GIF limit
  GifHouseStore.update((oldState: Gif[]) => [...oldState, ...gifsToStore]); // Update the GIF store with fetched GIFs
};

// Function to fetch trending GIFs
export const trendingGifs = async () => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${PUBLIC_GIPHY_APIKEY}&limit=16`
  );
  return await res.json();
};

// Function to fetch additional trending GIFs
export const fetchTrendingMoreGif = async (offset: number) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${PUBLIC_GIPHY_APIKEY}&offset=${offset}&limit=16`
  );
  const gifs = await res.json();
  const gifsToStore = gifs.data.map((gif: GifObject) => {
    return {
      id: gif.id,
      gif_url: gif.images["original"].webp,
      title: gif.title,
    };
  });
  TrendingGifLimit.set(gifs.pagination.total_count); // Update the trending GIF limit
  TrendingGifsStore.update((oldState: Gif[]) => [...oldState, ...gifsToStore]); // Update the trending GIF store with fetched GIFs
};
