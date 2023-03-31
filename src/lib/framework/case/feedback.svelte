<script>

	import { contrib } from "$helpers";

</script>
<section class="bg-whitney min-h-screen text-black">
    <div class="w-5/6 mx-auto grid grid-cols-2">

        <div class="flex flex-col gap-4">
            
            <img src="/images/quotes.svg" class="w-10 h-10" alt="quote">
            <p class="font-serif font-semibold text-4xl tracking-tighter leading-10 mb-3">It is an excellent tool for Customs to combat IPR infringements.</p>
            <div class=" grid grid-cols-2 grid-rows-2 gap-2 h-24 w-3/6">
               <div class="h-full row-span-2 overflow-hidden ">
                    <img src="/images/founder4.jpg" class=" object-top object-cover" alt="client" srcset="">
                                </div> 
                    <span class="self-end">Elvis Osano</span>
                    <span class=" font-sirenia">Secretary General @INTERPOL
                    </span>


            </div>
        </div>

    </div>
<!-- //benefitsz -->
<section class="grid min-h-screen place-items-center">
    <div class="w-3/6 pl-32">
        <h3 class="tracking-wide text-3xl mb-3 font-sirenia font-bold">ULTRAFAST ERGONOMICS
    </h3>
    <p class="font-sans leading-8 text-xl">Customs officers use the web platform all over the world, from the port of Frankfurt to the outback in Kazakhstan. To enable people with completely different backgrounds to use the system, we shaped the user experience with straightforward interaction patterns and we tested them with users before integrating them into the UI concept.</p>
    </div>
    


</section>
<!-- screenshot -->
<section class="w-5/6 mx-auto min-h-screen">
    
    <img src="/images/ss1.png" alt="" class="h-full w-full" srcset="">

</section>
<!-- benefits -->
<section class="grid min-h-screen place-items-center">
    <div class="w-3/6 pl-32">
        <h3 class="tracking-wide text-3xl mb-3 font-sirenia font-bold w-4/5">A LOGICAL INFORMATION ARCHITECTURE
    </h3>
    <p class="font-sans leading-8 text-xl">We completely restructured the information architecture according to principles from cognitive science. A logical overview and a coherent experience reduce the need for training and support, making it easier to scale the number of users. We hid little features in the app that educate the users about hacks for specific tasks. Thus, we have observed that as they use the app, their productivity goes up.</p>
    </div>
    


</section>
<!-- second quote  -->
<section class="w-5/6 mx-auto h-max mb-32 grid grid-cols-2">

    <div class="flex flex-col gap-4">
        
        <img src="/images/quotes.svg" class="w-10 h-10" alt="quote">
        <p class="font-serif font-semibold text-4xl tracking-tighter leading-10 mb-3">The new version helped customs officers to improve their efficiency in policing shipments and controlling goods.</p>
        <div class=" grid grid-cols-2 grid-rows-2 gap-2 h-24 w-3/6">
           <div class="h-full row-span-2 overflow-hidden ">
                <img src="/images/founder4.jpg" class=" object-top object-cover" alt="client" srcset="">
                            </div> 
                <span class="self-end">Elvis Osano</span>
                <span class=" font-sirenia">Secretary General @INTERPOL
                </span>


        </div>
    </div>

</section>
<!-- screenshot -->
<section class="w-full  min-h-screen">
    
    <img src="/images/ss1.png" alt="" class="h-full w-full" srcset="">

</section>
<!-- //outcomes -->
<section class="min-h-screen mt-32 flex justify-end w-11/12">
    <div class="w-4/6 ">
        <h2 class="uppercase text-3xl font-bold tracking-wide font-sirenia mb-3" >Outcomes</h2>
   <ul>
    {#each contrib as c}
    <li class="border-b pb-3 pt-2 border-grey ">
        {c}
        </li>

    {/each}

   </ul>
    </div>
    
</section>
<!-- //see also  -->
<section class="grid w-11/12 min-h-screen">
    <div class="justify-self-end w-4/6">
        <h3 class="uppercase text-3xl font-bold tracking-wide font-sirenia mb-3">See Also</h3>
        <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <div class="">
            <h1 class="text-bluu mb-2 font-semibold font-mont text-sm uppercase">WORLD TRADE ORGANIZATION</h1>
            <p>Technical Cooperation Activities: Information from Intergovernmental Organizations
            </p>

        </div>
        <div class="">
            <h1 class="text-bluu mb-2 font-semibold font-mont text-sm uppercase">WORLD TRADEMARK REVIEW</h1>
            <p>WCO successfully launches its IPM Connected program
            </p>

        </div>
        <div class="">
            <h1 class="text-bluu mb-2 font-semibold font-mont text-sm uppercase">CANADIAN SHIPPER</h1>
            <p>WCO’s global actions to tackle counterfeiting
            </p>

        </div>
    </div>
    </div>
    
</section>

</section>
