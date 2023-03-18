<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
  import { Motion } from "svelte-motion";
let element:any;
let intersecting:any;
</script>
<IntersectionObserver once {element} threshold="{0.2}" bind:intersecting>
<section bind:this={element} class="flex flex-col overflow-hidden lg:flex-row items-center py-20 bg-whitney text-dark h-auto lg:h-screen relative">
  {#if intersecting}
    <div class="lg:w-5/12 w-11/12 lg:ml-16 ml-6 mr-6 mb-10 lg:mb-0">
      <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        let:motion
        >
      <h1 use:motion class="text-4xl md:text-5xl lg:text-6xl font-sirenia leading-tight mb-6 md:mb-8 lg:mb-10">
        The AI That Keeps Banking Safe
      </h1>
    </Motion>
    <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        let:motion
        >
      <p use:motion class="text-base md:text-lg lg:text-xl font-mont leading-relaxed mb-8 md:mb-10 lg:mb-12">
        Our UX/UI design empowers fraud officers to quickly and effectively respond to cybersecurity threats, while our UX design ensures error-free handling of complex scenarios that affect millions of transactions per second.
      </p>
    </Motion>
      <Motion initial={{ y: 200, opacity: 0 }}
      animate={{  y: 0, opacity: 1 }} 
      transition={{ delay: 1.5, duration: 1 }}
      let:motion
      >
      <a use:motion href="/work" class="inline-block py-3 px-8 border border-orange text-orange font-bold hover:bg-orange hover:text-white transition duration-300 ease-in-out">
        View Case Study
      </a>
    </Motion>
    </div>
    <Motion initial={{ x: 200, opacity: 0 }}
      animate={{  x: 0, opacity: 1 }} 
      transition={{ delay: 1.7, duration: 1 }}
      let:motion
      >
    <div use:motion class="w-11/12 lg:w-7/12 h-80 mr-5 lg:h-auto relative lg:static">
      <img src="images/bank.png" alt="circles" class="object-cover w-full h-full">
    </div>
  </Motion>
    {/if}
  </section>
</IntersectionObserver>