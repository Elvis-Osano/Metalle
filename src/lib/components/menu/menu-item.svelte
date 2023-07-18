<script lang="ts">
	import { Motion } from 'svelte-motion';

	import { humbuggerState } from '$lib/store/nav';
	import type { menuListType } from '$helpers';

	export let info: menuListType;
	export let shownav: boolean;

	const closeMenu = () => (shownav = false);

	const bottomVariants = {
		hidden: {
			pathLength: 0,
			opacity: 0,
			y: -200
		},
		visible: {
			pathLength: 1,
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				duration: 0.2
			}
		}
	};

	const variants = {
		hidden: {
			pathLength: 0,
			opacity: 0
		},
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: 0.4
			}
		}
	};
</script>

<div class="p-2 flex" on:click={closeMenu}>
	<a href={info.href} class="text-black">{info.text}</a>
</div>
