<script lang="ts">
import Particles from "svelte-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
   
    let onParticlesLoaded = (event:any) => {
        const particlesContainer = event.detail.particles;

        
    };

    let particlesInit = async (engine:Engine) => {
       console.log(engine);
        await loadFull(engine);
    };

</script>
<section class="flex justify-between w-full  top-0">
   
    <div class="text-transparent uppercase flex pl-5 lg:mt-28 mt-32 justify-center flex-col bg-clip-text  bg-gradient-to-r from-orange to-orange/25">
        
        <div class="flex items-center gap-4 ">
            <span class="lg:w-16 w-1 h-[1px] bg-orange"></span>
            <h1 class="lg:text-xl text-xs">Transform your business today</h1>
        </div>
        
            <h1 class="  lg:text-8xl text-xl  capitalize font-sans">Think Ahead <br/> And scale Results</h1>

   </div>
      
    
    
   
       <img src="/images/big.png" alt="Marigold logo" class=" h-max w-5/12">   
    



<div  class="absolute inset-0 lg:h-[110vh] h-0 z-[1]">
            <Particles  
    url="/JSON/particles.json"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>  
        </div>
        
    
  
</section>
