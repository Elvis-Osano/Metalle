
<script>
	import { links } from "$helpers";




</script>

<nav class="flex justify-start z-10 relative  lg:justify-between items-start gap-4 lg:flex-row md:flex-row flex-col lg:items-center lg:w-5/6 w-11/12 mx-auto lg:top-16 top-8"  >
  <a href="/">
  <div class="flex items-center justify-center gap-2">

    <img src="/images/logo.svg" alt="Marigold logo" class="h-7 w-7 row-span-2">
 
  <div class="text-transparent uppercase flex flex-col bg-clip-text  bg-gradient-to-r from-[#ff7f50] to-[#ff7f50]/40">
     <h1 class="text-sm tracking-[1px]">Marigold</h1>
  <small class="text-[#daa520] font-semibold">Softwares</small>
  </div>
 
</div>
</a>

<ul class="flex lg:gap-8 gap-4">
  {#each links as link}
    <li class="text-whitney font-sans uppercase text-sm hover:text-gold font-semibold tracking-[2px]">
      <a href={link.href}>{link.text}</a>
    </li>
  {/each}
</ul>
</nav>

