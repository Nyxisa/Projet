<script setup lang="ts">
import Cursor from '@/components/Cursor.vue'
import CardDon from '@/components/CardDon.vue';
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Récupérez les produits de nos généreux donneurs&nbsp;!</h1>
        </div>
    </div>
    <section class="px-[7vw] py-10 flex gap-8">
        <div class="flex flex-col gap-4"> 
            <div class="flex-col gap-2 p-6 bg-grey rounded-xl w-[300px] h-min hidden lg:flex flex-shrink-0">
            <h5 class="text-darkgreen">Catégorie</h5>
            <RouterLink to="" class="">Légumes</RouterLink>
            <RouterLink to="" class="">Fruits</RouterLink>
            <h5 class="py-6 text-darkgreen">Distance (km) : 15 km</h5>
            <Cursor :value="10" :min="0" :max="20" />
        </div>
        <h3 class="text-darkgreen">Vous souhaitez donner vous aussi&nbsp;?</h3>
        <RouterLink to="/" class="mx-auto my-8 btn">Créer une annonce</RouterLink>
    </div>
        
        <div><h2>Sauvez ces délicieux fruits & légumes, gratuitement&nbsp;!</h2>
        <div class="flex flex-wrap justify-start gap-4 py-8 lg:gap-16">
              <CardDon v-for="dons in DonsListe" :key="dons.id" v-bind="{ ...dons }"/>
              <CardDon/>
              <CardDon/>
              <CardDon/>
              <CardDon/>
              <CardDon/>
              <CardDon/>
               
            </div></div>
    </section>
</template>

