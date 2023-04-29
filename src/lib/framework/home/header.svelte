<script lang="ts">
	import { Motion } from 'svelte-motion';
	// import Particles from "svelte-particles";
	import { loadFull } from 'tsparticles';
	import type { Engine } from 'tsparticles-engine';
	let innerHeight: number;

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;
	};

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};
</script>

<!-- //Loop Scrolling -->
<svelte:window bind:innerHeight />
<section class="flex  lg:h-max h-[70vh] lg:min-h-screen w-full  mx-auto  relative right-0 top-0">
	<div class="flex flex-col  justify-end pb-20 w-5/6 pl-5 mx-auto text-whitney uppercase">
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
					<span use:motion class="w-0 hidden lg:block h-[1px] bg-[#E76D57] lg:w-8" />
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
				class="text-4xl  lg:text-8xl font-mont capitalize mt-8 leading-tight text-left color"
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
			class="lg:w-6/12 absolute right-0 z-[-1]  flex lg:items-end items-center justify-end  lg:h-max w-full overflow-hidden"
		>
			<img
				use:motion
				src="/images/big.png"
				alt="Marigold logo"
				class=" lg:h-full h-11/12 w-full"
			/>
		</div>
	</Motion>

	<!-- <div id="tsparticles"  class="{`absolute inset-0 cursor-crosshair  h-${innerHeight} z-[1]`}" >
            <Particles  
    url="/JSON/particles.json"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>  
        </div> -->
</section>
