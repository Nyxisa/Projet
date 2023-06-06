<script setup lang="ts">
import CardDon from '@/components/CardDon.vue';
import CardProductor from '@/components/CardProductor.vue';


</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Comment fonctionnent les dons ?</h1>
        </div>
    </div>
    <div class="flex w-full">
        <RouterLink to="/donner"
            class="btn-don don">
            Donner</RouterLink>
        <RouterLink to="/sauver"
            class="bg-orange active:border-orange btn-don don">
            Sauver</RouterLink>
    </div>
    <div class="flex flex-col justify-center gap-4 mx-4 my-10">
        <img src="/img/illu-eco.webp" alt="panier de légumes" class="max-w-[54px] m-auto">
        <h2 class="text-4xl font-bold text-center lg:text-6xl">Sauver des produits&nbsp;?! Comment ça marche&nbsp;?</h2>
        <img src="/img/deco-poire-banane.webp" alt="panier de légumes" class="m-auto left-[5vw] lg:absolute z-[-1]">
        <p class="text-center lg:text-xl">Vous avez un potager, des invendus, des produits en trop&nbsp;? <br>
            Donnez-les pour bénéficier de nombreuses réductions&nbsp;!</p>
        <img src="/img/deco-avocat-poivron.webp" alt="panier de légumes" class="right-[5vw] m-auto lg:absolute z-[-1]">
        <p class="text-center lg:text-xl">Nous récupérons les produits trop <span
                class="uppercase text-orange">PETITS</span>, trop <span class="uppercase text-orange">TORDUS</span>, trop
            <span class="uppercase text-orange">DIFFORMES</span>.
        </p>
        <h3 class="text-3xl font-bold text-center text-darkgreen lg:text-5xl">Mais toujours aussi savoureux&nbsp;!</h3>
        <RouterLink to="/donner" class="mx-auto my-8 btn">
            FAIRE UN DON</RouterLink>
    </div>

    <section class="px-[8vw]">

        <h5>Donner des produits</h5>
        <h3 class="mb-2 text-darkgreen">Vous êtes un particulier&nbsp;?</h3>
        <div class="items-start gap-[4vw] lg:flex">
            <div>
                <p class="pt-2">Découvrez les étapes à suivre pour faire des dons de produits grâce à La Cagette Fermière.</p>
                <p>Chez La Cagette Fermière, la solidarité et le partage sont des valeurs fortes.</p>
                <p>C'est pourquoi faire un don vous permet de bénéficiez de 20% de réduction sur votre panier lors de votre
                    première
                    commande.</p>
                <p class="mb-6">Rejoignez notre communauté engagée et faites profiter de nombreuses personnes de vos
                    récoltes&nbsp;!
                </p>
                <RouterLink to="/donner" class="block mx-auto my-8 btn w-fit lg:mx-0">Je veux donner</RouterLink>
            </div>
                <div class="flex py-6 space-x-2 overflow-x-auto lg:gap-12 lg:py-0 lg:w-[30vw] lg:overflow-visible">
                    <CardDon class="max-w-[250px] w-full" />
                    <CardDon class="lg:hidden" />
                    <CardDon class="lg:hidden" />
                </div>
            
        </div>
    </section>
    <section class="px-[8vw] py-12">


        <h5>Devenir partenaire</h5>
        <h3 class="mb-2 text-darkgreen">Vous êtes Agriculteur, Fermier, Producteur...?</h3>
        <div class="items-start gap-8 lg:flex">
            <div>
                <p class="pt-2">Si vous êtes agriculteur dans le Lot et Garonne vous pouvez devenir partenaire avec la
                    Cagette Fermière&nbsp;!
                </p>
                <p>Pour ce faire, il vous suffira de remplir un formulaire que vous pourrez télécharger ici.</p>
                <p>Comme Jade et Maxime ou encore Christophe, faites le choix de donner une seconde vie à vos invendus tout
                    en
                    profitant d'une rémunération supplémentaire.</p>
                <RouterLink to="/auth" class="block mx-auto my-8 btn w-fit lg:mx-0">Rejoignez-nous</RouterLink>
            </div>
            <div class="flex justify-around gap-[2vw] py-0">
                <CardProductor class="max-w-[250px] w-full" />
                <CardProductor class="max-w-[250px] w-full" />
            </div>
        </div>
    </section>
</template>