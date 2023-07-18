<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let shownav: boolean = false;
	const toggleUpdate = () => (shownav = !shownav);
</script>

<div
	on:click={toggleUpdate}
	class={`flex flex-col gap-2 absolute top-4 w-[30px] md:hidden z-[100] ${
		shownav ? 'right-2' : 'right-2'
	}`}
	on:keydown
>
	{#if !shownav}
		<p class="bg_color h-[2px]" />
		<p class="bg_color h-[2px]" />
		<p class="bg_color h-[2px]" />
	{:else}
		<Motion
			let:motion
			initial={{ rotateZ: 0 }}
			animate={{ rotateZ: '45deg', y: 8 }}
			transition={{ duration: 0.5 }}
		>
			<p use:motion class="bg_color h-[2px]" />
		</Motion>
		<Motion
			let:motion
			initial={{ rotateZ: 0, x: -100 }}
			animate={{ rotateZ: '-45deg', x: 0, y: -1 }}
			transition={{ duration: 0.5 }}
		>
			<p class="bg_color h-[2px]" use:motion />
		</Motion>
	{/if}
</div>
