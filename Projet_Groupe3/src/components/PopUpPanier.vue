<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
import close from './icons/close.vue';

// import { pb } from '@/backend'
// import type { ProductsResponse } from '@/pocketbase-types'
// const props: ProductsResponse = defineProps<ProductsResponse>()
// const img0 = props.img
// const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div class="flex flex-col items-center bg-white rounded-xl shadow-1 gap-4 md:max-w-[250px] max-w-[150px] py-4">
        <div class="relative flex flex-col items-start justify-start px-2 bg-white rounded-xl md:px-4">
            <img src="/img/legume-pic.webp" alt="" class="object-cover rounded-xl" />
        </div>
        <div class="relative flex items-center self-stretch justify-between px-3 md:px-6">
            <div>
                <p class="mb-0 text-sm lg:text-base">Concombre</p>
                <p class="mb-0 text-sm lg:text-base text-darkgrey">
                    1.20 € / pièce
                </p>
            </div>
            <shoppingBag class="md:max-w-[32px] max-w-[24px]" />
        </div>
    </div>


    <div class="w-[600px] m-auto my-10">
        <div class="flex items-center justify-between px-6 py-2 rounded-t-xl bg-grey">
            <h5>Votre panier comporte 0 articles</h5>
            <close/>
        </div>
        <div class="bg-white rounded-b-xl">
            <div class="flex gap-4 p-10">
                <img src="/img/legume-pic.webp" alt="" class="object-cover rounded-xl max-w-[150px]" />
                <div class="flex-grow">
                    <h5>Concombre</h5>
                    <p class="my-2">1,20 € Pièce (~356 g)</p>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex gap-2 h-min">
                            <span
                                class="px-4 py-2 text-white lg:mt-0 rounded-xl hover:ring-2 hover:ring-lightgreen active:border-lightgreen active:border-4 bg-lightgreen lg:text-xl">-</span>
                            <span class="px-8 py-2 rounded-xl bg-grey lg:text-xl">3</span>
                            <span
                                class="px-4 py-2 text-white lg:mt-0 rounded-xl hover:ring-2 hover:ring-lightgreen active:border-lightgreen active:border-4 bg-lightgreen lg:text-xl">+</span>
                        </div>
                        <span class="px-4 py-2 font-serif text-base text-white rounded-xl bg-brown md:text-3xl">3,60€</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-between px-4 py-6 border-t-2 border-grey">
                <RouterLink class="btn" to="">Continuer mes achats</RouterLink>
                <div class="flex items-center gap-4">
                    <shoppingBag />
                    <p class="mb-0">Panier : 0,00€</p>
                </div>
            </div>
        </div>
    </div>
</template>