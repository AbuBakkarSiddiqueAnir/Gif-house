import { writable } from 'svelte/store';

export const gifHouse = writable([]);

export const fetchGif = async () => {

	const url = `https://api.giphy.com/v1/gifs/random?api_key=5mnTugMrRmSl9f6a4plxJMMbg4HD3pBf&tag=cat&rating=g`;
	const res = await fetch(url);
	const results = await res.json();
    console.log(results)
	const gifs = Object.keys(results.data.images).map((key, index) => results.data.images[key].url);
	gifHouse.set(gifs);

};