<script setup lang="ts">
import linkedin from '@/components/icons/linkedin.vue';
</script>
<template>
    <div class="flex flex-col flex-wrap justify-center gap-10 my-10 md:flex-row">
        <div class="relative flex flex-col items-center md:w-[450px]">
            <div class="w-[300px] h-[300px] bg-brown rounded-full"></div>
            <div class="absolute z-10 mt-16 mr-44 md:mr-28">
                <div>
                    <h2 class="text-2xl font-bold text-right text-white">Lisa</h2>
                    <p class="mt-4 text-sm text-right text-white max-w-[100px]">Manageuse du groupe</p>
                    <a href="https://www.linkedin.com/in/lisacgln/" class="flex justify-end mt-4">
                        <linkedin />
                    </a>
                </div>
            </div>
            <img src="/img/lisa.webp" alt="Image" class="absolute top-0 right-0 w-56">
        </div>

        <div class="relative flex flex-col items-center md:w-[450px]">
            <div class="w-[300px] h-[300px] bg-darkgreen rounded-full"></div>
            <div class="absolute z-10 mt-16 ml-44 md:ml-28">
                <div>
                    <h2 class="text-2xl font-bold text-white">Julia</h2>
                    <p class="mt-4 text-sm text-white max-w-[100px]">Chargée de relation avec nos partenaires</p>
                    <a href="https://www.linkedin.com/in/julia-duflot/" class="flex justify-start mt-4">
                        <linkedin />
                    </a>
                </div>
            </div>
            <img src="/img/julia.webp" alt="Image" class="absolute top-0 left-0 w-56">
        </div>

        <div class="relative flex flex-col items-center md:w-[450px]">
            <div class="w-[300px] h-[300px] bg-lightgreen rounded-full"></div>
            <div class="absolute z-10 mt-16 mr-44 md:mr-28">
                <div>
                    <h2 class="text-2xl font-bold text-right text-white">Jaël</h2>
                    <p class="mt-4 text-sm text-right text-white max-w-[100px]">Chargée de communication</p>
                    <a href="https://www.linkedin.com/in/jaël-amemoutou/" class="flex justify-end mt-4">
                        <linkedin />
                    </a>
                </div>
            </div>
            <img src="/img/jael.webp" alt="Image" class="absolute top-0 right-0 w-56">
        </div>
    </div>
</template>