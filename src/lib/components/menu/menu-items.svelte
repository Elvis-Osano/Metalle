<script lang="ts">
	import type { menuListType } from '$helpers';
	import MenuItem from './menu-item.svelte';

	export let links: menuListType[];
	export let shownav: boolean;
</script>

<div>
	{#each links as link}
		<MenuItem info={link} bind:shownav />
	{/each}
</div>
