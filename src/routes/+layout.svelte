<script>
  import Navbar from "../components/Navbar.svelte";


</script>

<div class="w-full bg-gray-800 min-h-screen">
	<Navbar/>
	<main class='w-full'>
		<slot />
	</main>

</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
