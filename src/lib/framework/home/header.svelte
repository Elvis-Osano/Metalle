<script lang="ts">
	import { Motion } from 'svelte-motion';
	// import Particles from "svelte-particles";

	let innerHeight: number;
</script>

<!-- //Loop Scrolling -->
<svelte:window bind:innerHeight />
<section class="flex lg:h-max h-[70vh] lg:min-h-screen w-full mx-auto relative right-0 top-0">
	<div
		class="flex flex-col lg:justify-end justify-center lg:pb-20 lg:w-5/6 w-11/12 pl-5 mx-auto text-whitney uppercase"
	>
		<Motion
			initial={{ y: -70, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			let:motion
		>
			<div use:motion class="flex items-center gap-4">
				<Motion
					initial={{ width: 0 }}
					animate={{ width: 32 }}
					transition={{ duration: 1, delay: 1 }}
					let:motion
				>
					<span use:motion class="w-8 block lg:block h-[1px] bg-[#E76D57] lg:w-8" />
				</Motion>
				<h2 class="text-[#E76D57]">Keep Calm</h2>
			</div>
		</Motion>

		<Motion
			initial={{ y: 200, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1 }}
			let:motion
		>
			<div
				use:motion
				class="text-4xl lg:text-8xl font-mont capitalize mt-8 leading-tight text-left color"
			>
				Coming <br /> Soon
			</div>
		</Motion>
	</div>

	<Motion
		initial={{ x: 200, rotate: 30, opacity: 0 }}
		animate={{ x: 0, rotate: 0, opacity: 1 }}
		transition={{ duration: 1 }}
		let:motion
	>
		<div
			class="lg:w-6/12 absolute w-11/12 h-screen right-0 z-[-1] flex lg:items-end items-end justify-end lg:h-max overflow-hidden"
		>
			<img
				use:motion
				src="/images/big.png"
				alt="Metalle logo"
				class=" lg:h-full h-6/12 lg:w-full"
			/>
		</div>
	</Motion>
</section>
