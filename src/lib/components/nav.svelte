<script>
  import { links } from "$helpers";
  import { fly } from "svelte/transition";
  
  
  let scroll = 0;
  
 
  

</script>

<svelte:window bind:scrollY={scroll} />


<nav transition:fly="{{ y: -50, delay: 100 }}" class="flex justify-start items-center z-10 fixed lg:justify-between lg:items-center px-4 md:px-8 lg:px-32 w-full  mx-auto py-6 lg:py-5 transition-all {scroll > 0 ? 'bg-white text-black top-0' : 'bg-transparent lg:top-16'}">
  <a href="/" class="flex items-center gap-2">
    <img src="/images/logo.svg" alt="Marigold logo" class="h-7 w-7">
    <div class="text-[#ff7f50]">
      <h1 class="text-sm font-bold uppercase tracking-[1px]">Marigold</h1>
      <p class="text-xs text-gold font-semibold">Softwares</p>
    </div>
  </a>
  <ul class="lg:flex hidden  lg:flex-row   lg:gap-8 gap-4">
    {#each links as link}
      <li class={`font-sans uppercase text-sm  hover:text-gold font-semibold tracking-[2px] ${scroll > 0 ? 'text-black leading-3' : 'text-whitney'}`}>
        <a href={link.href}>{link.text}</a>
      </li>
    {/each}
  </ul>
</nav>

