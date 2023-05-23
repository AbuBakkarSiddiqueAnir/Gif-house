import {apiKey} from "./data";

export const fetchGif = async (searchTerm:string) => {
	const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=30`);
    return await res.json();
};