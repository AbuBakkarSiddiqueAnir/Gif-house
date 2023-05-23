import { writable } from 'svelte/store';
import { fetchGif } from './utils/request';

export const gifHouse = writable([]);
(async ()=>{
	const results = await fetchGif('cat')
	const gifs = results.data.map((gif:object) => gif.images['480w_still'].url);
	gifHouse.set(gifs);
})()




