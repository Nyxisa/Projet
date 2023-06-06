<script setup lang="ts">
import CreationAnnonce from '@/components/CreationAnnonce.vue';


</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Je crée mon annonce</h1>
        </div>
    </div>
    <div class="flex justify-between my-20">
        <img src="/img/tomates-jardin.webp" alt="Tomates dans un jardin" class="hidden object-cover w-[35vw] lg:block rounded-r-xl">
        <CreationAnnonce />
        </div>
</template>