<script setup lang="ts">
import Maps from '@/components/Maps.vue';
import SingleDon from '@/components/SingleDon.vue';

import { donById } from '@/backend'

const donByIdListe = await donById('2hygzu63dmdqmr7');

console.log(donByIdListe)
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Récupérer un don</h1>
        </div>
    </div>
    <div class="px-[8vw] py-8">
        <h1 class="mb-4 text-center text-darkgreen">Annonce</h1>
        <div class="mx-auto">
            <SingleDon class="max-w-[250px] mx-auto" v-for="don in donByIdListe" v-bind="{ ...donByIdListe }" />
            <div>
                <h2 class="my-4 text-center text-darkgreen">Situer le produit</h2>
                <Maps />
            </div>
            <div class="mx-auto">
                <h3 class="mx-auto my-8 mb-2 text-center text-darkgreen">Vous souhaitez donner vous aussi&nbsp;?</h3>
                <RouterLink to="/donner" class="block mx-auto rounded-full w-fit btn">Créer une annonce</RouterLink>
            </div>
        </div>
    </div>
</template>

 

