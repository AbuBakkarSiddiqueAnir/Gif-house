# GifHouse

GifHouse is a website that allows users to discover gifs from Giphy. It provides features such as searching for gifs, viewing trending gifs, favoriting andgifs. The project is built using [SvelteKit](https://kit.svelte.dev/) and TypeScript, and Tailwind CSS for styling.

## Setup Instructions

To build, test, and run the GifHouse project locally, follow these steps:

```bash
git clone https://github.com/AbuBakkarSiddiqueAnir/Gif-house
cd gifhouse
npm install
npm run dev
```

## Features

### Homepage

The homepage of GifHouse displays a search box where users can enter queries to search for gifs.

### Trending Page

The "Trending" page, accessible through a different route within the app, showcases the top trending gifs on Giphy at the moment.

### Favoriting Gifs

Users can favorite gifs by clicking on a button associated with each gif. The site stores the set of favorited gifs in the browser's LocalStorage.
