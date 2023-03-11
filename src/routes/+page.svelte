<script lang="ts">
	import { Header, Lab, Wedo } from "$framework";
	import { onMount } from "svelte";
	let banner:any;

onMount(async () => {
	const module = await import('../lib/framework/banner.svelte');
	banner = module.default;
});
</script>

<svelte:head>
	<title>Home Of Heroes</title>
	
</svelte:head>
<main>
   <Header/> 
   <Lab/>
   <svelte:component this={banner} foo="bar"/>
   <Wedo/>
</main>


