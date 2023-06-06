<script setup lang="ts">
import CardProductor from '@/components/CardProductor.vue';

import { allProductors } from '@/backend'

const ProducteursListe = await allProductors();

console.log(ProducteursListe)


</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Nos producteurs</h1>
        </div>
    </div>
    <div class="px-[8vw] py-6">
        <h2 class="mb-4 leading-tight">Agriculteurs, Fermiers... Ils sont les producteurs de la Cagette Fermière</h2>

        <section class="flex flex-wrap justify-around gap-4 md:gap-8">
            <CardProductor v-for="producteurs in ProducteursListe" :key="producteurs.id" v-bind="{ ...producteurs }"/>
        </section>
    </div>
</template>