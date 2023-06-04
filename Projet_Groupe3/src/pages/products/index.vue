<script setup lang="ts">
import CardTest from '@/components/CardTest.vue';
import PopUpPanier from '@/components/PopUpPanier.vue';

// import CardProduct from '@/components/CardProduct.vue';
// import { allProducts } from '@/backend'

// const ProduitsListe = await allProducts();

// console.log(ProduitsListe)

</script>
<template>
        <div class="relative">
        <img src="/img/title-pic.webp" alt="épis de blé" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Nos produits</h1>
        </div>
    </div>
    <!-- Filtres mobiles scroll -->
    <div class="flex py-4 space-x-2 overflow-x-auto lg:hidden">
        <button class="btn-filter">Tout</button>
        <button class="btn-filter">Légumes verts</button>
        <button class="btn-filter">Légumes racines</button>
        <button class="btn-filter">Légumes feuilles</button>
        <button class="btn-filter">Légumes bulbes</button>
        <button class="btn-filter">Fruits à pépins</button>
        <button class="btn-filter">Fruits à noyau</button>
        <button class="btn-filter">Fruits secs</button>
        <button class="btn-filter">Agrumes</button>
    </div>
    
    <!-- Filtres fixes côté gauche desktop -->
    <section class="px-[7vw] flex lg:my-10 lg:gap-10">
        <div class="flex-col gap-2 p-10 bg-grey rounded-xl w-[250px] h-min hidden lg:flex flex-shrink-0">
            <RouterLink to="" class="">Tout</RouterLink>
            <h5 class="pt-6 text-darkgreen">Légumes</h5>
            <RouterLink to="" class="">Légumes verts</RouterLink>
            <RouterLink to="" class="">Légumes racines</RouterLink>
            <RouterLink to="" class="">Légumes feuilles</RouterLink>
            <RouterLink to="" class="">Légumes bulbes</RouterLink>
            <h5 class="pt-6 text-darkgreen">Fruits</h5>
            <RouterLink to="" class="">Fruits à pépins</RouterLink>
            <RouterLink to="" class="">Fruits à noyau</RouterLink>
            <RouterLink to="" class="">Fruits secs</RouterLink>
            <RouterLink to="" class="">Agrumes</RouterLink>
        </div>

        <div class="flex flex-wrap justify-center gap-4 py-4 lg:gap-16">
            <CardTest />
            <CardTest />
            <CardTest />
            <CardTest />
            <CardTest />
            <CardTest />
            <CardTest />
        </div>
    </section>
    <PopUpPanier/>
</template>