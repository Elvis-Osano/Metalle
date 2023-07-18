<script>
	import { links } from '$helpers';
	import { fly } from 'svelte/transition';

	//custom
	import Humbugger from './menu/humbugger.svelte';
	import PopupMenu from './menu/popup-menu.svelte';

	let innerWidth = 0;

	let shownav = false;
	let scroll = 0;

	let oldScrollY = 0;
	let direction = true;

	const handleScroll = () => {
		if (scroll > oldScrollY) {
			direction = false;
		} else if (scroll < oldScrollY) {
			direction = true;
		}

		oldScrollY = scroll;
	};
	window.addEventListener('scroll', handleScroll);
</script>

<svelte:window bind:scrollY={scroll} bind:innerWidth />

<div class="absolute w-[100%]">
	<div class="w-[70%] relative h-[100vh]">
		<!-- <Humbugger bind:shownav /> -->
		<PopupMenu bind:shownav />
	</div>
</div>

{#if direction}
	<nav
		transition:fly={{ y: -50, delay: 300, duration: 1000 }}
		class="flex items-center z-10 fixed justify-between lg:items-center px-4 md:px-8 lg:px-32 w-full mx-auto py-6 lg:py-5 transition-all {scroll >
		50
			? 'bg-whitney shadow-xl text-black top-0'
			: 'bg-transparent lg:top-16'}"
	>
		<Humbugger bind:shownav />
		<a href="/" class="flex items-center gap-2 ml-[26px]">
			{#if shownav}
				<img src="/images/metallesoftllc.svg" alt="Metalle Logo" class="h-16 w-max" />
			{:else}
				<img src="/images/metallesoftllc.svg" alt="Metalle logo" class="h-16 w-max" />
			{/if}
			<div class="text-[#ff7f50]">
				<h1 class="text-sm font-bold font-sirenia uppercase tracking-[4px]">Metalle</h1>
				<p class="text-xs text-gold font-semibold font-mont">Softwares LLC</p>
			</div>
		</a>

		<ul class="lg:flex hidden lg:flex-row lg:gap-6 gap-4">
			{#each links.slice(1) as link}
				<li
					class={` uppercase navlink text-sm w-full text-center relative hover:text-orange font-mont tracking-[2px] ${
						scroll > 0 ? 'text-black leading-3' : 'text-gold'
					}`}
				>
					<a href={link.href} class="relative p-2">{link.text}</a>
					<div
						class="dot absolute h-2 w-2 bg-[#e95316] opacity-0 -top-2 translate-x-1/2 rounded-full"
					/>
				</li>
			{/each}
		</ul>
		<!-- content here -->
	</nav>
	<!-- content here -->
{/if}
