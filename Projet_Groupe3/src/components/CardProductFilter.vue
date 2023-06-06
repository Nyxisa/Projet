<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';
import { allFruits, pb } from '@/backend'
import type { ProductsResponse } from '@/pocketbase-types'
const props: ProductsResponse = defineProps<ProductsResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <!-- <div class="flex flex-col items-center bg-white rounded-xl shadow-1 gap-4 md:max-w-[250px] max-w-[150px] py-4">
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
            <RouterLink :to="{ name: 'product-category', params: { 'category':'Fruit' } }"><shoppingBag class="md:max-w-[32px] max-w-[24px]" /></RouterLink>
        </div>
    </div> -->
</template>