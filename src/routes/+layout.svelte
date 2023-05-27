<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="w-full bg-gray-800 min-h-screen">
	<Navbar/>
	<main class=' max-w-7xl mx-auto'>
		<slot />
	</main>
	<Footer/>
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
