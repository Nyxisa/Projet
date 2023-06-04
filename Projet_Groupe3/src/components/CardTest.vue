<script setup lang="ts">
import shoppingBag from './icons/shoppingBag.vue';

// import { pb } from '@/backend'
// import type { ProductsResponse } from '@/pocketbase-types'
// const props: ProductsResponse = defineProps<ProductsResponse>()
// const img0 = props.img
// const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <div class="flex flex-col items-center overflow-hidden bg-white rounded-xl shadow-1 gap-4 m-[5vw] max-w-[330px]">
        <div
            class="relative flex flex-col items-center self-stretch justify-start overflow-hidden rounded-t-xl bg-darkgreen">
        </div>
        <div
            class="relative flex flex-col items-start self-stretch justify-start overflow-hidden bg-white rounded-xl px-[2vh]">
            <img src="/img/legume-pic.webp" alt="" class="self-stretch object-cover rounded-xl" />
        </div>
        <div class="relative flex items-center self-stretch justify-between px-[3vh] mb-4">
            <div>
                <p class="mb-0 text-sm lg:text-base">Concombre</p>
                <p class="mb-0 text-sm lg:text-base text-darkgrey">
                    1.20 € / pièce
                </p>
            </div>
            <shoppingBag />
        </div>
    </div>
</template>