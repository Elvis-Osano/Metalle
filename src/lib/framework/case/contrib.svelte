<script lang="ts">
    import { contrib } from "$helpers";
    
</script>
<section class="min-h-screen bg-whitney text-black flex flex-col items-end">
    <div class="w-3/6 pt-20">
         <h2 class="font-bold my-5 text-3xl uppercase tracking-wide font-sirenia ">Our contributions</h2>
    <div class="grid grid-cols-2 grid-rows-5 gap-4 ">
        
        
    {#each contrib as c}
    <div class="border-b pb-2 border-grey ">
        {c}
        </div>

    {/each}

    </div>

    </div>
   
</section>