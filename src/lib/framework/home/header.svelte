<script lang="ts">

import { Motion } from "svelte-motion";
import Particles from "svelte-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
 let innerHeight:number;
  
 
  
    let onParticlesLoaded = (event:any) => {
        const particlesContainer = event.detail.particles;

        
    };

    let particlesInit = async (engine:Engine) => { 
       
        await loadFull(engine);
    };

</script>
<svelte:window bind:innerHeight/>
<section  class="flex justify-between lg:h-max h-[70vh] lg:min-h-screen  w-full relative right-0 top-0">
    
   
    <div class="flex flex-col  justify-end lg:pl-10 pl-5  pb-14 mt-32 text-whitney uppercase">
        <Motion initial={{ x: -200, opacity: 0 }}
        animate={{  x: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 2, type: "spring", bounce: 0.5 }}
        let:motion
        >  <div use:motion class="flex items-center gap-4">
          <span class="w-0 hidden lg:block h-[1px] bg-orange lg:w-8"></span>
          <h2 class="   text-orange">Transform your business today</h2>
        </div>
    </Motion>

        <Motion initial={{ y: 200, opacity: 0 }}
   animate={{  y: 0, opacity: 1 }} 
   transition={{ delay: 0.5, duration: 2, type: "spring", bounce: 0.5 }}
   let:motion
   >
        <div use:motion class="text-4xl  lg:text-8xl font-mont capitalize mt-8 leading-tight text-left">Think ahead<br>and scale results</div>
    </Motion>
      </div>
      
    
    
   <Motion initial={{ x: 200,rotate:45, opacity: 0 }}
   animate={{ rotate:0 , x: 0, opacity: 1 }} 
   transition={{ delay: 0.5, duration: 3, type: "spring", bounce: 0.5 }}
   let:motion
   >
   <div class="lg:w-6/12  flex lg:items-end items-center justify-end  lg:h-max w-full overflow-hidden">
<img use:motion src="/images/big.png" alt="Marigold logo"  class=" lg:h-full h-11/12 w-full"> 
   </div>
    
   </Motion>
         
    



<div id="tsparticles"  class="{`absolute inset-0 cursor-crosshair  h-${innerHeight} z-[1]`}" >
            <Particles  
    url="/JSON/particles.json"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>  
        </div>
        
    
  
</section>
