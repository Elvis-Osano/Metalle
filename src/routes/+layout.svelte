<script>
	import { Nav } from '$components';
	import { Footer } from '$home';
	import 'modern-normalize/modern-normalize.css';
	import { onMount } from 'svelte';
	import '../styles/app.css';
	let ready=false;
   onMount(() => {
    setTimeout(() => {
      ready = true;
    }, 1000);
  });
</script>
{#if ready}

<main class="relative h-max">
	<Nav/>



	<slot />
</main>
<Footer/>
{:else}
<div class="absolute inset-0 grid place-items-center">
<img width="{100}" height="{100}" src="video/loader.gif" alt="load"/>
</div>


{/if}



