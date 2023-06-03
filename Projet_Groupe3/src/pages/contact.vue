<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="épis de blé" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="text-2xl font-bold text-darkgreen lg:text-6xl">Nous contacter</h1>
        </div>
    </div>
    <section class="p-[8vw]">
        <ContactForm />
    </section>
</template>