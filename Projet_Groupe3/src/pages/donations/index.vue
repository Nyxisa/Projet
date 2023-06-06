<script setup lang="ts">
import Maps from '@/components/Maps.vue';
import CardDon from '@/components/CardDon.vue';
</script>

<template>
        <div class="relative">
            <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
            <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                <h1 class="top-banner">Récupérer un don</h1>
            </div>
        </div>
    <div class="container px-4 py-8 mx-auto">
        <div class="md:flex">
            <div class="md:w-1/2">
                <h1 class="mb-4">Annonce</h1>
        
                <p>Date : 06 Juin 2023</p>
            </div>
            <div>
                <h2 class="mb-2">Situer le produit</h2>
                <div id="map" class="w-full h-64"></div>
                <Maps />
            </div>
             <h2 class="mb-2 text-darkgreen">Vous souhaitez donner vous aussi ?</h2>
             <button class="block mx-auto rounded-full btn">Créer une annonce</button>
        </div>
    </div>
</template>

 

