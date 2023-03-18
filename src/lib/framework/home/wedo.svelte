<script lang="ts">
    import DiAppstore from 'svelte-icons/di/DiAppstore.svelte';
    import DiAtom from 'svelte-icons/di/DiAtom.svelte';
    import DiGitPullRequest from 'svelte-icons/di/DiGitPullRequest.svelte';
    import GiSpellBook from 'svelte-icons/gi/GiSpellBook.svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    import { Motion } from "svelte-motion";
let element:any;
let intersecting:any;
    interface Step {
      title: string;
      desc: string;
      icon: typeof DiAppstore 
    }

    const steps: Step[] = [
      {
        title: "Research user needs",
        desc: "Discover pain points and understand user behaviour",
        icon: GiSpellBook
      },
      {
        title: "Prototype an idea",
        desc: "Validate ideas with an interactive prototype of your vision",
        icon: DiAppstore
      },
      {
        title: "Design A New Product",
        desc: "Launch an MVP with a best in class user experience",
        icon: DiAtom
      },
      {
        title: "Improve a digital product",
        desc: "Become a category leader using designops and UX/UI design",
        icon: DiGitPullRequest
      }
    ];
  </script>
  <IntersectionObserver threshold="{0.2}" once  {element} bind:intersecting>
 
<section bind:this={element} class="bg-whitney  text-dark py-20">
  {#if intersecting}
    <div  class="w-5/6 mx-auto flex flex-col gap-6 h-max">
      <Motion initial={{ y: 200, opacity: 0 }}
animate={{  y: 0, opacity: 1 }} 
transition={{ delay: 0.5, duration: 1 }}
let:motion
>
         <h1 use:motion class="lg:text-5xl text-3xl lg:w-5/6 w-full font-verdana mb-20">
        We work in dedicated project teams, blending DesignOps, user research, UX design, UI and engineering.
    </h1>
  </Motion>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {#each steps as step,index}
        <Motion initial={{ y: 200, opacity: 0 }}
        animate={{  y: 0, opacity: 1 }} 
        transition={{ delay: 0.5*(index+1), duration: 1 }}
        let:motion
        >
        <div use:motion  class="flex flex-col gap-4 justify-center">
            <i class="w-24 h-24">
                <svelte:component this={step.icon} />
             
            </i>

            <small>{index+1}</small>
            <h2 class="font-bold font-sirenia text-2xl">{step.title}</h2>
            <p class="">{step.desc}</p>

        </div>
      </Motion>
        {/each}
      
       
    </div>
    </div>

   {/if}
</section>
</IntersectionObserver>