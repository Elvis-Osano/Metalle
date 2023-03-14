<script lang="ts">

import IntersectionObserver from "svelte-intersection-observer";
import { Motion } from "svelte-motion";
let element:any;
let intersecting:any;


</script>


<IntersectionObserver  {element} bind:intersecting>
 
  <section bind:this={element} class="   relative  py-20 h-max">
    {#if intersecting}

  <div class="w-5/6 flex gap-10 flex-col mx-auto">
 
  <Motion initial={{ y: 200, opacity: 0 }}
animate={{  y: 0, opacity: 1 }} 
transition={{ delay: 0.5, duration: 1 }}
let:motion
>
    <h1 use:motion  class="font-serif  text-5xl mb-20">We are <span class="text-orange/50">developers</span>  & cognitive <span class="text-orange/50">scientists</span> .</h1>
  </Motion>
  <Motion initial={{ y: 200, opacity: 0 }}
animate={{  y: 0, opacity: 1 }} 
transition={{ delay: 1, duration: 1 }}
let:motion
>
    <p use:motion class=" text-left lg:text-5xl font-sans text-2xl  mb-20">At our software company, we continue a design tradition that enhances human potential through technology. By applying a structured understanding of the mind, we develop purposeful product strategies and craft beautiful user experiences that delight our customers.</p>
  </Motion>
    <a href="/about" class="border border-whitney text-orange p-2 lg:w-2/12 w-6/12 ">Get To Know Us</a>
  </div>
    {/if}

        

   
</section>
</IntersectionObserver>
