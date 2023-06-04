<script setup lang="ts">
import { pb } from '@/backend'
import type { products } from '@/pocketbase-types'
const props: ProductsResponse = defineProps<Response>()
const img0 = props.photo
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })

</script>

<template>
    <nav class="max-w-[250px] hidden md:block">
        <RouterLink class="btn-artist" :to="{ name: 'artiste-id', params: { id } }">{{ prenom }} {{ nom }}</RouterLink>
    </nav>
</template>
