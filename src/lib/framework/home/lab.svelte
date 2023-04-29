<script>
	import IoIosArrowRoundDown from 'svelte-icons/io/IoIosArrowRoundDown.svelte';
</script>

<section class=" bg-dark h-max w-full mt-20 relative">
	<div class="w-full h-[90vh]">
		<video muted autoplay loop class="w-full h-full object-cover">
			<source src="/video/stock2.webm" type="video/webm" />

			Your browser does not support the video tag.
		</video>
	</div>

	<span
		class="lg:h-32 w-10 h-16 lg:w-14 grid place-items-center bg-gold/50 absolute -top-10 lg:left-10 left-5 "
	>
		<i class="text-whitney">
			<IoIosArrowRoundDown />
		</i>
	</span>
</section>
