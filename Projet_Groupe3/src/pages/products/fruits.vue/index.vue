<script setup lang="ts">
import PopUpPanier from '@/components/PopUpPanier.vue';
import CardProduct from '@/components/CardProduct.vue';

import { allFruits } from '@/backend'

const FruitsListe = await allFruits();

console.log(FruitsListe)

</script>
<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Nos produits</h1>
        </div>
    </div>
    <!-- Filtres mobiles scroll -->
    <div class="flex py-4 space-x-2 overflow-x-auto lg:hidden">
        <RouterLink to="/products" class="btn-filter">TOUT</RouterLink>
        <RouterLink to="/products/legumes" class="btn-filter">LÉGUMES</RouterLink>
        <RouterLink to="" class="btn-filter">Légumes verts</RouterLink>
        <RouterLink to="" class="btn-filter">Légumes racines</RouterLink>
        <RouterLink to="" class="btn-filter">Légumes feuilles</RouterLink>
        <RouterLink to="" class="btn-filter">Légumes bulbes</RouterLink>
        <RouterLink to="/products/fruits" class="btn-filter">FRUITS</RouterLink>
        <RouterLink to="" class="btn-filter">Fruits à pépins</RouterLink>
        <RouterLink to="" class="btn-filter">Fruits à noyau</RouterLink>
        <RouterLink to="" class="btn-filter">Fruits secs</RouterLink>
        <RouterLink to="" class="btn-filter">Agrumes</RouterLink>
    </div>

    <!-- Filtres fixes côté gauche desktop -->
    <section class="px-[7vw] flex lg:my-10 lg:gap-10">
        <div class="flex-col gap-2 p-10 bg-grey rounded-xl w-[250px] h-min hidden lg:flex flex-shrink-0">
            <RouterLink to="/products">Tout</RouterLink>
            <RouterLink to="/products/legumes">
                <h5 class="pt-6 text-darkgreen">Légumes</h5>
            </RouterLink>
            <RouterLink to="">Légumes verts</RouterLink>
            <RouterLink to="">Légumes racines</RouterLink>
            <RouterLink to="">Légumes feuilles</RouterLink>
            <RouterLink to="">Légumes bulbes</RouterLink>
            <RouterLink to="/products/fruits">
                <h5 class="pt-6 text-darkgreen">Fruits</h5>
            </RouterLink>
            <RouterLink to="">Fruits à pépins</RouterLink>
            <RouterLink to="">Fruits à noyau</RouterLink>
            <RouterLink to="">Fruits secs</RouterLink>
            <RouterLink to="">Agrumes</RouterLink>
        </div>

        <div class="flex flex-wrap justify-center gap-4 py-4 lg:gap-16">
              <CardProduct v-for="produits in FruitsListe" :key="produits.id" v-bind="{ ...produits }" />
        </div>
    </section>
<PopUpPanier /></template>