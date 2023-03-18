<script lang="ts">
   import { Map } from "@onsvisual/svelte-maps";
   import maplibre, { Marker } from "maplibre-gl";
   import { onMount } from "svelte";
	let map:any;
	// State
	let zoom:any;
	let center = {};
	onMount(() => {
		map.addControl(new maplibre.NavigationControl({}), 'top-left');
        new Marker({color:"#daa520"}).setLngLat([36.8906432970894,-1.3287866]).addTo(map)
	})
</script>
<h1 class="text-5xl w-5/6 mx-auto leading-10 font-sirenia py-10">We’re anchored in Nairobi but our design projects are as international as our customers.</h1>
<section class="h-96 relative w-5/6 mx-auto">
<Map id="map" 
		style="https://api.maptiler.com/maps/streets/style.json?key=AvLKRq7x75U1Czi7a50m" 
		location={{lng: 36.8906432970894, lat: -1.3287866, zoom:40 }} 
		bind:map={map} bind:zoom={zoom} bind:center={center} />
    
    </section>