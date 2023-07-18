<script>
	import { Nav } from '$components';

	import 'modern-normalize/modern-normalize.css';
	import { onMount } from 'svelte';

	import PopupMenu from '$components/menu/popup-menu.svelte';
	import Footer from '$components/footer.svelte';
	import '../styles/app.css';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<main class="relative h-max">
		<Nav />
		<slot />
		<Footer />
	</main>
	<!-- <Footer/> -->
{:else}
	<div class="absolute min-h-screen inset-0 grid place-items-center">
		<img width={100} height={100} src="video/loader.gif" alt="load" />
	</div>
{/if}
