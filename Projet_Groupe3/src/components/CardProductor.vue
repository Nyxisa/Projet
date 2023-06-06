<script setup lang="ts">
import { pb } from '@/backend'
import type { ProductorsResponse } from '@/pocketbase-types'
const props: ProductorsResponse = defineProps<ProductorsResponse>()
const img0 = props.profilepic
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <div class="p-2 bg-white w-[130px] rounded-xl shadow-1 lg:w-[245px] mx-auto">
        <img class="w-full mx-auto" :src="urlImg0" alt="Photo du producteur">
        <h4 class="text-center">{{firstname}}</h4>
    </div>
</template>