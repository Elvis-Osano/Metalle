<script lang="ts">

import { Motion } from "svelte-motion";
import Particles from "svelte-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
 
  
 
  
    let onParticlesLoaded = (event:any) => {
        const particlesContainer = event.detail.particles;

        
    };

    let particlesInit = async (engine:Engine) => {
       
        await loadFull(engine);
    };

</script>
<section  class="flex justify-between lg:h-max h-96 w-full relative  top-0">
    
   
    <div class="flex flex-col  justify-center pl-10 lg:mt-28 mt-32 text-whitney bg-clip-text text-transparent uppercase">
        <Motion initial={{ x: -200, opacity: 0 }}
        animate={{  x: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 2, type: "spring", bounce: 0.5 }}
        let:motion
        >  <div use:motion class="flex items-center gap-4">
          <span class="w-1 h-[1px] bg-orange lg:w-16"></span>
          <h2 class=" lg:text-xl text-sm text-orange">Transform your business today</h2>
        </div>
    </Motion>
        <Motion initial={{ y: -200, opacity: 0 }}
   animate={{  y: 0, opacity: 1 }} 
   transition={{ delay: 0.5, duration: 2, type: "spring", bounce: 0.5 }}
   let:motion
   >
        <div use:motion class="text-3xl   lg:text-8xl font-sans capitalize mt-8 leading-tight text-left">Think ahead<br>and scale results</div>
    </Motion>
      </div>
      
    
    
   <Motion initial={{ x: 200, rotate:45, opacity: 0 }}
   animate={{ rotate:0 , x: 0, opacity: 1 }} 
   transition={{ delay: 0.5, duration: 3, type: "spring", bounce: 0.5 }}
   let:motion
   >
    <img use:motion src="/images/big.png" alt="Marigold logo"  class=" h-max lg:w-5/12 w-6/12"> 
   </Motion>
         
    



<div id="tsparticles"  class="absolute inset-0  lg:h-[110vh] h-96 z-[1]">
            <Particles  
    url="/JSON/particles.json"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>  
        </div>
        
    
  
</section>
