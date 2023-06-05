<script setup lang="ts">
import Cursor from '@/components/Cursor.vue'
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="Fruits et légumes décoratifs" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Comment fonctionnent les dons ?</h1>
        </div>
    </div>
    <Cursor :value="10" :min="0" :max="20"/>
     
</template>

