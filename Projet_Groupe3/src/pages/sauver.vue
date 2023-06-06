<script setup lang="ts">
import Cursor from '@/components/Cursor.vue'
import CardDon from '@/components/CardDon.vue';

import { ref } from 'vue';

interface CursorProps {
    value: number;
    min: number;
    max: number;
}

const cursorValue = ref(15);

const updateCursorValue = (event: Event) => {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(value)) {
        cursorValue.value = value;
    }
};

import { allDons } from '@/backend'

const DonsListe = await allDons();

console.log(DonsListe)
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="hidden top-banner lg:block">Récupérez les produits de nos généreux donneurs&nbsp;!</h1>
            <h1 class="top-banner lg:hidden">Récupérez des dons&nbsp;!</h1>
        </div>
    </div>
    <div class="flex justify-around p-4 space-x-2 lg:hidden">
        <button class="w-full btn-filter">Légumes</button>
        <button class="w-full btn-filter">Fruits</button>
    </div>
    <section class="px-[7vw] lg:py-10 flex gap-8">
        <div class="flex flex-col gap-4">
            <div class="flex-col gap-2 p-6 bg-grey rounded-xl w-[300px] h-min hidden flex-shrink-0 md:flex">
                <h5 class="text-darkgreen">Catégorie</h5>
                <RouterLink to="" class="">Légumes</RouterLink>
                <RouterLink to="" class="">Fruits</RouterLink>
                <h5 class="py-6 text-darkgreen">Distance (km) : {{ cursorValue }} km</h5>
                <Cursor :value="cursorValue" :min="0" :max="20" @input="updateCursorValue" />
            </div>
            <div class="hidden md:block">
                <h3 class="mb-6 leading-tight text-darkgreen">Vous souhaitez donner vous aussi&nbsp;?</h3>
                <RouterLink to="/" class="mx-auto my-8 btn">Créer une annonce</RouterLink>
            </div>
        </div>

        <div>
            <h2 class="hidden md:block">Sauvez ces délicieux fruits & légumes, gratuitement&nbsp;!</h2>
            <div class="flex flex-wrap justify-start gap-4 lg:py-8 lg:gap-16">
                <CardDon v-for="dons in DonsListe" :key="dons.id" v-bind="{ ...dons }" />
            </div>
        </div>
    </section>
</template>

