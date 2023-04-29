<script>
	import { links } from '$helpers';
	import { fly } from 'svelte/transition';

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

{#if direction}
	<nav
		transition:fly={{ y: -50, delay: 300, duration: 1000 }}
		class="flex items-center z-10 fixed justify-between lg:items-center px-4 md:px-8 lg:px-32 w-full  mx-auto py-6 lg:py-5 transition-all {scroll >
		50
			? 'bg-whitney shadow-xl text-black top-0'
			: 'bg-transparent lg:top-16'}"
	>
		<a href="/" class="flex items-center gap-2">
			<img src="/images/logo3.png" alt="Marigold logo" class="h-10 w-max" />
			<!-- <div class="text-[#ff7f50] font-sirenia">
				<h1 class="text-sm font-bold uppercase tracking-[1px]">BloomByte</h1>
				<p class="text-xs text-gold font-semibold">Softwares</p>
			</div> -->
		</a>
		{#if innerWidth < 500}
			<ul class="flex gap-4 text-whitney">
				<li>About</li>
				<button
					class="border-b border-white"
					on:click={() => {
						shownav = !shownav;
					}}>More+</button
				>
			</ul>
			<!-- content here -->
		{/if}

		{#if shownav}
			<div
				class="bg-whitney h-max absolute inset-0"
				style="background-image: url('images/flower.png');background-size: cover;"
			>
				<ul
					class="flex bg-transparent relative z-10 bg-gradient-to-r pt-20 from-dark to-transparent flex-col w-3/6 h-max   lg:gap-8 gap-4"
				>
					{#each links as link}
						<li
							class={`font-sans   uppercase text-sm w-max hover:text-gold py-5 pl-2 font-semibold leading-3 tracking-[2px] text-whitney`}
						>
							<a
								href={link.href}
								on:click={() => {
									shownav = false;
								}}>{link.text}</a
							>
						</li>
					{/each}
				</ul>
				<div class="bg-dark/75 absolute inset-0 z-[1]" />
			</div>

			<!-- content here -->
		{/if}

		<ul class="lg:flex hidden   lg:flex-row   lg:gap-6 gap-4">
			{#each links.slice(1) as link}
				<li
					class={` uppercase navlink text-sm w-full text-center relative hover:text-orange font-mont tracking-[2px] ${
						scroll > 0 ? 'text-black leading-3' : 'text-gold'
					}`}
				>
					<a href={link.href} class="relative p-2">{link.text}</a>
					<div
						class="dot absolute h-2 w-2  bg-[#e95316] opacity-0 -top-2 translate-x-1/2 rounded-full"
					/>
				</li>
			{/each}
		</ul>
		<!-- content here -->
	</nav>
	<!-- content here -->
{/if}
