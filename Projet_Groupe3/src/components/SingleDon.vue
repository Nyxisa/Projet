<script setup lang="ts">
import Message from './icons/message.vue';
import { pb } from '@/backend'
import type { DonationResponse } from '@/pocketbase-types'
const props: DonationResponse = defineProps<DonationResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

import { donById } from '@/backend'

const donByIdListe = await donById('2hygzu63dmdqmr7');

console.log(donByIdListe)
</script>

<template>
    <div class="flex flex-col items-start justify-center gap-8 mb-10 md:flex-row">
        <img :src="urlImg0" alt="Don" class="relative mx-auto rounded-xl md:mx-0" />
        <div class="absolute rounded-l-xl invisible w-fit h-[40px] bg-white p-4 flex items-center right-0 top-[35%]"
            :class="{ '!visible': donByIdListe.reservation }">
            <p class="pr-4 mb-0 text-right text-black">Réservé</p>
        </div>
        <div class="md:w-[40vw] mx-auto md:mx-0 w-[200px]">
            <p class="mb-4 overflow-auto text-xl lg:text-3xl">{{ donByIdListe.title_donation }}</p>
            <p class="text-base text-left lg:text-base">{{ donByIdListe.description }}</p>
            <p class="text-base lg:text-base">Distance : {{ donByIdListe.distance }}km</p>
        </div>
    </div>
    <div class="py-8">
        <RouterLink to="/chat" class="flex items-center gap-4 px-4 py-2 mx-auto text-black btn bg-grey w-fit">
            Récupérer ce don
            <Message class="w-[36px] min-w-[36px]" />
        </RouterLink>
    </div>
</template>