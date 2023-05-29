<script setup lang="ts">
import Members from '@/components/Members.vue'
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="épis de blé" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="text-2xl font-bold text-darkgreen">La Cagette Fermière&nbsp;? Qui sommes-nous&nbsp;?</h1>
        </div>
    </div>
    <section class="p-[7vw]">
        <img src="/img/about-confiture.webp" alt="pots de confiture">
        <h2 class="pt-6 text-3xl font-bold lg:text-6xl">À propos de La Cagette Fermière</h2>
        <p class="font-serif text-2xl font-bold lg:text-xl text-darkgreen">Vous en avez assez du gaspillage
            alimentaire&nbsp;?<br>Nous aussi&nbsp;!</p>
        <p class="pt-2 text-sm text-black lg:text-xl">C'est pourquoi nous avons créé La Cagette fermière, une
            plateforme
            de vente de fruits et légumes aux formes authentiques et originales.</p>
        <p class="pt-2 text-sm text-black lg:text-xl"> Nous travaillons en étroite collaboration avec des
            agriculteurs et primeurs locaux afin de récupérer leurs invendus.
            Cela nous permet de vous proposer des produits frais de qualité, moins chers qu'en grande
            surface&nbsp;!</p>
    </section>
    <section class="px-[7vw]">
        <img src="/img/about-fraises.webp" alt="plat rempli de fraises">
        <h2 class="pt-6 text-3xl font-bold lg:text-6xl">Notre histoire</h2>
        <p class="font-serif text-2xl font-bold lg:text-xl text-darkgreen">Étudiantes en But MMI & écolo</p>
        <p class="pt-2 text-sm text-black lg:text-xl">Nous sommes des étudiantes en BUT Métiers du Multimédia et de
            l'internet.
            L'écologie et la lutte contre le gaspillage sont des valeurs qui nous tiennent à cœur.</p>
        <p class="pt-2 text-sm text-black lg:text-xl">C'est pourquoi, dans le cadre d'un exercice pédagogique, nous
            avons pris l'initiative de mettre en place un site afin de limiter le gaspillage alimentaire.<br>
            Et ce, tout en offrant la possibilité aux habitants du Lot et Garonne d'économiser sur les fruits, les
            légumes et les produits du jardin.</p>
    </section>
    <section class="p-[7vw]">
        <h2 class="text-3xl font-bold lg:text-6xl">Les membres de l'équipe</h2>
        <Members />
    </section>
</template>
