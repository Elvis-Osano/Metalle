<script>
	import { Nav } from '$components';
	import { Footer } from '$framework';
	import 'modern-normalize/modern-normalize.css';
	import { onMount } from 'svelte';
	import '../styles/app.css';
	let ready=false;
   onMount(() => {
    setTimeout(() => {
      ready = true;
    }, 100);
  });
</script>
{#if ready}

<main class="relative h-max">
	<Nav/>



	<slot />
</main>
<Footer/>
{:else}
<div class="grid place-items-center h-screen">
	<p class="text-3xl font-bold text-rose-700">Marigold</p>
</div>

{/if}



