<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
import { pb } from '@/backend'
import type { ProductsResponse } from '@/pocketbase-types'
const props: ProductsResponse = defineProps<ProductsResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

// import { activePopUp, closePopUp } from './PopUpPanier.vue';

// function openPopUp() {
//     activePopUp.value = true;
// }

import { ref, defineComponent } from 'vue';
</script>

<template>
    <!-- <nav class="max-w-[250px] hidden md:block">
        <RouterLink class="btn" :to="{ name: '', params: { id } }">{{ designation }}</RouterLink>
        <img :src="urlImg0" alt="">
    </nav> -->
    <div class="flex flex-col items-center bg-white rounded-xl shadow-1 gap-4 md:max-w-[250px] max-w-[150px] py-4">
        <div class="relative flex flex-col items-start justify-start px-2 bg-white rounded-xl md:px-4">
            <img :src="urlImg0" alt="Produit" class="object-cover rounded-xl" />
        </div>
        <div class="relative flex items-center self-stretch justify-between px-3 md:px-6">
            <div>
                <p class="mb-0 text-sm lg:text-base">{{ designation }}</p>
                <p class="mb-0 text-sm lg:text-base text-darkgrey">
                    {{ price }} € / {{ price_type }}
                </p>
            </div>
            <shoppingBag class="md:max-w-[32px] max-w-[24px]" />
        </div>
    </div>
</template>