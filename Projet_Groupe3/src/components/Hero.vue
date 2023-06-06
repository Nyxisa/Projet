<script setup lang="ts">
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    subTitle?: String
}>()
</script>


<template>
    <div class="relative">
        <img :src="imgPath" :alt="imgAlt" class="w-full h-auto">

        <div class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-[4vw]">
            <h1 class="text-5xl font-bold text-center text-darkgreen lg:text-7xl md:text-6xl mx-[8vw] animate-fade-in">{{ title }}</h1>
            <RouterLink to="/products"
                class="btn xl:mt-14 lg:mt-0 mt-14">
                FAIRE MES COURSES</RouterLink>
        </div>
    </div>
</template>