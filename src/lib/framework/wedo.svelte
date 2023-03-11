<script lang="ts">
    import DiAppstore from 'svelte-icons/di/DiAppstore.svelte';
    import DiAtom from 'svelte-icons/di/DiAtom.svelte';
    import DiGitPullRequest from 'svelte-icons/di/DiGitPullRequest.svelte';
    import GiSpellBook from 'svelte-icons/gi/GiSpellBook.svelte';
    interface Step {
      title: string;
      desc: string;
      icon: typeof DiAppstore 
    }
  console.log(typeof DiAppstore);
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
<section class="bg-whitney  text-dark pt-20">
    <div class="w-5/6 mx-auto flex flex-col gap-6 h-screen">
         <h1 class="text-5xl w-5/6 font-serif mb-20">
        We work in dedicated project teams, blending DesignOps, user research, UX design, UI and engineering.
    </h1>
    <div class="grid grid-cols-4 gap-4">
        {#each steps as step,index}
        
        <div class="flex flex-col gap-4 justify-center">
            <i class="w-24 h-24">
                <svelte:component this={step.icon} />
             
            </i>

            <small>{index+1}</small>
            <h2 class="font-bold text-2xl">{step.title}</h2>
            <p class="">{step.desc}</p>

        </div>
             <!-- content here -->
        {/each}
      
       
    </div>
    </div>

   
</section>