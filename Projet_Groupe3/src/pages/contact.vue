<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="épis de blé" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Nous contacter</h1>
         </div>
    </div>
    <section class="px-[8vw] py-12">
         <h4 class="font-bold lg:text-6xl">Une Question, une suggestion&nbsp;? Envoyez-nous un message&nbsp;!</h4>
       <div class="items-center justify-around my-12 lg:flex"> <ContactForm />
                <img src="/img/panier-myrtilles.webp" alt="panier de myrtilles"
                class="h-fit xl:max-w-[500px] lg:max-w-[400px] hidden lg:block"></div>
                
    </section>
</template>