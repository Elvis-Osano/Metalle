<script lang="ts"> 
import IntersectionObserver from "svelte-intersection-observer";
import { Motion } from "svelte-motion";
let element:any;
let intersecting:any;
</script>
<IntersectionObserver once {element} bind:intersecting>
<section bind:this={element} class="flex h-max relative">
    {#if intersecting}
    
    <div class="flex flex-col lg:justify-center justify-start lg:w-5/12 w-5/6 lg:m-32 m-10  gap-24">
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        let:motion
        >
        <h1 use:motion class="lg:text-5xl text-3xl font-sirenia">The Border Police goes digital</h1> </Motion>
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        let:motion
        >
        <p use:motion class="text-xl font-mont">The OECD hired our UX agency to design an intelligence system. The user experience is universal. Border police agencies in 107 countries rely on the user interface to cope with the chaos of field operations.</p>
    </Motion>
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        let:motion
        >
        <a use:motion href="/case/police" class="border border-orange hover:bg-orange hover:text-alice text-orange p-2 lg:w-4/12 w-6/12">View Case Study</a>
    </Motion>
    </div>
    <div class="absolute flex right-20 bottom-10 top-10 justify-end">
        <div class=" h-full">
            <img src="images/circles.svg" alt="circles" class="w-full h-full">
        </div>
        
    </div>
    {/if}
</section></IntersectionObserver>