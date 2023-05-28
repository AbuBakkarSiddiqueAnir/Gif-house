import { GifHouseStore } from "../gifstore";
import type { GifObject } from "../types/interface";
import type { Gif } from "../types/types";
import {apiKey} from "./data";

export const searchGif = async (searchTerm:string, offset?:number ) => {
	const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=30`);
    return await res.json();
};

export const fetchSearchMoreGif = async (searchTerm:string = 'man', offset?:number ) => {
	const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&offset=${offset}&limit=30`);
    const gifs = await res.json();
    const gifsToStore = gifs.data.map((gif : GifObject) => {
        return {
            id: gif.id,
            gif_url: gif.images['original'].webp,
            title: gif.title
        }
   })
   GifHouseStore.update((oldState:Gif[])=>[...oldState, ...gifsToStore]);
};
export const trendingGifs = async () => {
	const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30`);
    return await res.json();
};