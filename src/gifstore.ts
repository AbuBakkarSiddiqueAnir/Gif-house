import { writable } from 'svelte/store';

export const gifHouse = writable([]);
const apiKey = '5mnTugMrRmSl9f6a4plxJMMbg4HD3pBf'
let searchTerm = 'cat'
export const fetchGif = async () => {

	const url = `https://api.giphy.com/v1/gifs/random?api_key=5mnTugMrRmSl9f6a4plxJMMbg4HD3pBf&tag=cat&rating=g`;
	const url1 = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`
	const res = await fetch(url1);
	const results = await res.json();

	const gifs = results.data.map((gif) => gif.images['480w_still'].url);
	console.log(gifs)
	gifHouse.set(gifs);

};