<script setup lang="ts">
import { pb } from '@/backend'
import type { ProductsResponse } from '@/pocketbase-types'
const props: ProductsResponse = defineProps<ProductsResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <nav class="max-w-[250px] hidden md:block">
        <RouterLink class="btn" :to="{ name: 'product-id', params: { id } }">{{ designation }}</RouterLink>
        <img :src="urlImg0" alt="">
    </nav>
</template>
