<script setup lang="ts">
import ble from '@/components/icons/ble.vue'
import camion from '@/components/icons/camion.vue'
import CardCagette from '@/components/CardCagette.vue';
import CardEtape from '@/components/CardEtape.vue';
</script>


<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Les abonnements aux cagettes</h1>
        </div>
    </div>
    <section>
        <div class="flex flex-col justify-center gap-4 mx-4 mt-8 mb-0">
            <img src="/img/illu-ble.webp" alt="épis de blé" class="max-w-[54px] m-auto">
            <h2 class="text-4xl font-bold text-center lg:text-6xl">Notre sélection de produits</h2>
            <p class="text-center lg:text-xl">Découvrez nos abonnements pour recevoir chaque mois votre cagette de fruits et
                légumes&nbsp;!</p>
        </div>

        <div class="flex flex-wrap justify-center px-4">
            <CardCagette title="Abonnement Light" imgPath="/img/cagette-1.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="20 €" name1="1kg | Pomme de terre" name2="0.2kg | Ail"
                name3="0.5kg | Abricots" name4="1kg | Tomates" name5="0.5kg | Fraises" name6="1kg | Pêches"
                name7="0.2kg | Noix" name8="1kg | Aubergines" name9="0.2kg | Framboises" />
            <CardCagette title="Abonnement Giant" imgPath="/img/cagette-2.webp"
                imgAlt="Cagette remplie de fruits et légumes" price="40 €" name1="4kg | Pomme de terre"
                name2="4kg | Artichaut" name3="1kg | Tomates" name4="2kg | Carottes" name5="3kg | Courgettes"
                name6="2kg | Poires" name7="0.5kg | Oignons" name8="2kg | Pommes" name9="2kg | Concombres" />
        </div>
    </section>

    <CounterBox />

    <section>
        <div class="flex flex-col justify-center gap-4 mx-4 my-4">
            <img src="/img/illu-panier.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
            <h2 class="text-4xl font-bold text-center lg:text-6xl">Choisissez votre cagette&nbsp;!</h2>
            <p class="text-center lg:text-xl">Une grande famille, ou en solo... La cagette fermière s'adapte à vos besoins.</p>
        </div>

        <CardEtape />
    </section>

    <div class="flex flex-col justify-center gap-4 mx-4 my-8">
        <img src="/img/illu-eco.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
        <h2 class="text-4xl font-bold text-center lg:text-6xl">Choisissez votre fréquence</h2>
        <camion class="m-auto left-[10vw] lg:absolute z-[-1]"/>
        <p class="text-center lg:text-xl">Vous pouvez être livré entre une à quatre fois par mois<br>
            Et bonne nouvelle, avec un abonnement la livraison est gratuite&nbsp;!</p>
        <ble class="right-[10vw] m-auto lg:absolute z-[-1]"/>
        <p class="text-center lg:text-xl">Découvrez nos deux abonnements <span
                class="uppercase text-orange">Light</span> et <span class="uppercase text-orange">Giant</span>,<br>nous sommes sûrs que vous trouverez celui à votre goût&nbsp;!
        </p>
        <h3 class="text-3xl font-bold text-center text-darkgreen lg:text-5xl">Parce que manger local, c'est capital&nbsp;!</h3>
        <RouterLink to="/dons" class="m-auto my-8 btn">
            être livré dès maintenant</RouterLink>
    </div>
</template>
