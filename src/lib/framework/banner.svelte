<script lang="ts">
import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
let lot:number[]=[1,2,6,8,9,4,5,8,2,8];
let controlsLayout = [
  'previousFrame',
  'playpause',
  'stop',
  'nextFrame',
  'progress',
  'frame',
  'loop',
  'spacer',
  'background',
  'snapshot',
  'zoom',
  'info',
];
</script>
<section class="w-5/6 mx-auto flex flex-col gap-10 pt-20 h-max">
    <h1 class="font-serif  text-5xl">We are designers & cognitive scientists.</h1>
    <p class=" text-left text-5xl font-serif">This blend is a natural continuation of a design tradition that elevates human potential. With a structured understanding of the mind, we map purposeful product strategies and create aesthetic experiences.</p>
    <a href="/about" class="border border-whitney text-orange p-2 w-2/12">Get To Know Us</a>
    
    
  <div class="relative h-44 flex">
   {#each lot as ltti}
    <LottiePlayer
        src="/JSON/pot.json"
        autoplay="{true}"
        loop="{true}"
        controls="{false}"
        renderer="svg"
        background="transparent"
        height="{100}"
        width="{600}"
        speed="{0.8}"
        controlsLayout="{controlsLayout}"
      />
     <!-- content here -->
   {/each}
   
    
  </div>
        

   
</section>