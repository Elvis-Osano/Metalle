<script lang="ts">
   import IntersectionObserver from "svelte-intersection-observer";
   import { Motion } from "svelte-motion";
let element:any;
let intersecting:any;
</script>
<IntersectionObserver once {element} threshold="{0.2}" bind:intersecting>
<section bind:this={element} class="flex  overflow-hidden flex-col-reverse lg:flex-row items-center bg-whitney pb-20 text-dark h-auto lg:h-screen relative">
  {#if intersecting}
  <Motion initial={{ x: -200, opacity: 0 }}
        animate={{  x: 0, opacity: 1 }} 
        transition={{ delay: .5, duration: 1 }}
        let:motion
        >
    <div use:motion class="w-11/12 lg:w-7/12 h-80 ml-5 lg:h-auto relative lg:static">
            <img src="images/phone.png" alt="circles" class="object-cover w-full h-full">
          </div>
        </Motion>
    <div class="lg:w-5/12 w-11/12 lg:ml-16 ml-6 mr-6 mb-10 lg:mb-0">
      <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        let:motion
        >
        <h1 use:motion class="text-4xl md:text-5xl lg:text-6xl font-sirenia leading-tight mb-6 md:mb-8 lg:mb-10">
            Pushing the boundary on mobile
         
        </h1></Motion>
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        let:motion
        >
        <p use:motion class="text-base md:text-lg lg:text-xl font-mont leading-relaxed mb-8 md:mb-10 lg:mb-12">
            OLX is the leader in the automotive vertical with 20 million users per month. They trusted our UX/UI agency to shape their design strategy and to lay the foundation for the future.
        </p></Motion>
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        let:motion
        >
        <a use:motion href="/work" class="inline-block py-3 px-8 border border-orange text-orange font-bold hover:bg-orange hover:text-white transition duration-300 ease-in-out">
          View Case Study
        </a></Motion>
      </div>
   
        
        
      {/if}
    
</section>
</IntersectionObserver>