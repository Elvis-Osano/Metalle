<script lang="ts">
	import { Motion, type AnimatePresence } from 'svelte-motion';

	import MenuItems from './menu-items.svelte';
	import { links } from '$helpers';

	export let shownav: boolean;
	const modalVariant = {
		hidden: {
			x: -100
		},
		visible: {
			transition: { duration: 0.5 },
			x: 0
		}
	};
</script>

{#if shownav}
	<Motion variants={modalVariant} animate="visible" initial="hidden" let:motion>
		<div
			use:motion
			class="absolute top-0 left-0 w-[100%] h-[100%] bg-[#ffffffff] z-[10] p-[10px] md:hidden pt-[100px]"
		>
			<MenuItems {links} bind:shownav />
		</div>
	</Motion>
{/if}
