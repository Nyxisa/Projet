<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
import close from './icons/close.vue';

import { ref } from 'vue'

const activePopUp = ref(true)

function closePopUp() {
    activePopUp.value = false
}

// export { activePopUp, closePopUp }

// import { pb } from '@/backend'
// import type { ProductsResponse } from '@/pocketbase-types'
// const props: ProductsResponse = defineProps<ProductsResponse>()
// const img0 = props.img
// const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <!-- Version Desktop -->
    <div class="fixed invisible transition-opacity duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :class="{ '!visible': activePopUp }" v-scroll-lock="activePopUp">
        <div class="md:w-[600px] hidden md:block border-grey border-2 rounded-2xl">
            <div class="flex items-center justify-between px-6 py-2 rounded-t-xl bg-grey">
                <h5>Votre panier comporte 0 articles</h5>
                <button  @click="closePopUp"><close/></button>
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
                            <span
                                class="px-4 py-2 font-serif text-base text-white rounded-xl bg-brown md:text-3xl">3,60€</span>
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
    </div>
    <!-- Version Mobile -->
    <div class="fixed invisible transition-opacity duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :class="{ '!visible': activePopUp }" v-scroll-lock="activePopUp">
        <div class="w-[300px] my-10 md:hidden border-grey border-2 rounded-2xl">
            <div class="flex items-center justify-between px-6 py-2 rounded-t-xl bg-grey">
                <h5 class="text-center">Votre panier comporte<br>0 articles</h5>
                 <button  @click="closePopUp"><close/></button>
            </div>
            <div class="bg-white rounded-b-xl">
                <div class="py-6">
                    <img src="/img/legume-pic.webp" alt="" class="object-cover rounded-xl h-[150px] w-[200px] mx-auto" />
                    <h5 class="text-center">Concombre</h5>
                    <p class="my-2 text-center">1,20 € Pièce (~356 g)</p>
                    <div class="flex justify-center gap-2 my-4 h-min">
                        <span
                            class="px-4 py-2 text-white lg:mt-0 rounded-xl hover:ring-2 hover:ring-lightgreen active:border-lightgreen active:border-4 bg-lightgreen lg:text-xl">-</span>
                        <span class="px-8 py-2 rounded-xl bg-grey lg:text-xl">3</span>
                        <span
                            class="px-4 py-2 text-white lg:mt-0 rounded-xl hover:ring-2 hover:ring-lightgreen active:border-lightgreen active:border-4 bg-lightgreen lg:text-xl">+</span>
                    </div>
                    <div class="flex items-center justify-center">
                        <span class="px-4 py-2 font-serif text-base text-white rounded-xl bg-brown md:text-3xl">3,60€</span>
                    </div>
                </div>
                <div class="px-4 py-6 border-t-2 border-grey">
                    <div class="flex items-center justify-center gap-4 mb-8">
                        <shoppingBag />
                        <p class="mb-0">Panier : 0,00€</p>
                    </div>
                    <div class="flex justify-center">
                        <RouterLink class="btn" to="">Continuer mes achats</RouterLink>
                    </div>
                </div>
            </div>
        </div>
</div></template>