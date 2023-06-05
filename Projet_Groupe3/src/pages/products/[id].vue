<script setup lang="ts">
import CardProduct from '@/components/CardProduct.vue';
import { allProducts } from '@/backend'

const ProduitsListe = await allProducts();

console.log(ProduitsListe)

</script>
<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Nos produits</h1>
        </div>
    </div>
    <section class="px-[7vw] py-16">
        <CardProduct v-for="produits in ProduitsListe" :key="produits.id" v-bind="{ ...produits }" />
    </section>
</template>