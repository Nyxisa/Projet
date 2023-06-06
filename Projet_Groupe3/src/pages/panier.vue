<script setup lang="ts">
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Mon panier</h1>
        </div>
    </div>
    <div class="px-[8vw] py-6">
        <h2>Panier</h2>
        <section class="justify-between hidden lg:flex">
            <div class="flex flex-col justify-center">
                <div class="lg:w-[50vw] h-[600px] bg-grey rounded-xl">

                </div>
                <RouterLink class="mx-auto my-8 btn w-fit" to="/products">Continuer mes achats</RouterLink>
            </div>
            <div class="flex flex-col gap-8">
                <div class="w-[30vw] h-[150px] bg-grey flex flex-col justify-evenly rounded-xl">
                    <div class="flex justify-between px-6">
                        <p class="mb-0">0 ARTICLES</p>
                        <p class="mb-0">0,00€</p>
                    </div>
                    <div class="flex justify-between px-6">
                        <p class="mb-0">Livraison</p>
                        <p class="mb-0">Gratuit</p>
                    </div>
                </div>
                <div class="w-[30vw] h-[75px] bg-grey flex flex-col justify-evenly rounded-xl">
                    <div class="flex justify-between px-6">
                        <p class="mb-0">Total TTC</p>
                        <p class="mb-0">0,00€</p>
                    </div>
                </div>
                <RouterLink class="mx-auto btn w-fit" to="/panier">Valider ma commande</RouterLink>
            </div>
        </section>
    </div>

    <section class="flex flex-col lg:hidden px-[8vw]">
        <div class="w-full h-[400px] bg-grey flex flex-col justify-evenly rounded-xl">
            <p class="mb-0 text-center">Ooups... Votre panier est vide</p>
            <RouterLink class="mx-auto my-8 btn w-fit" to="/products">Faire mes courses</RouterLink>
        </div>
        <div class="flex items-start justify-between my-6">
            <p class="p-2 mb-0 bg-grey rounded-xl w-fit">0,00€</p>
            <RouterLink class="btn w-fit" to="/panier">Valider mon panier</RouterLink>
        </div>
    </section>
</template>