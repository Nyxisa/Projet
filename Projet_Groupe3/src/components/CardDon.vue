<script setup lang="ts">
import Message from './icons/message.vue';
import { pb } from '@/backend'
import type { DonationResponse } from '@/pocketbase-types'
const props: DonationResponse = defineProps<DonationResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })


</script>

<template>
    <div class="block">
        <div class="flex flex-col items-center overflow-hidden bg-white rounded-xl shadow-1 m-[2vw] w-[250px] lg:m-0">
            <p class="font-serif text-2xl font-bold text-center text-white lg:text-3xl"></p>
            <div class="relative flex flex-col items-start self-stretch bg-white rounded-xl px-[2vh] gap-4">
                <img :src="urlImg0" alt="Don" class="self-stretch object-cover rounded-xl" />

                <div class="absolute rounded-l-xl invisible w-fit h-[40px] bg-white p-4 flex items-center right-0 top-[35%]" :class="{ '!visible': reservation }">
                    <p class="pr-4 mb-0 text-right text-black">Réservé</p>
                </div>

                <div class="px-[1vh] relative flex items-center self-stretch justify-between my-2">
                    <p class="mb-0 overflow-auto text-base break-words lg:text-2xl line-clamp-1">{{ title_donation }}</p>
                    <Message class="w-[36px] min-w-[36px]" />
                </div>
                <div class="pb-2 px-[1vh]">
                    <p class="overflow-hidden text-sm text-left break-words lg:text-base line-clamp-2">{{ description }}</p>
                    <p class="text-sm lg:text-base">Distance : {{ distance }}km</p>
                </div>
            </div>
        </div>
    </div>
</template>