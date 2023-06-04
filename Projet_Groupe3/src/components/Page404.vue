<script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        const q = ref('');

        const submitForm = () => {
            const searchQuery = q.value + ' site:lacagettefermiere.lisa-cingolani.fr';
            const googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            window.open(googleURL, '_blank');
        };

        return {
            q,
            submitForm
        };
    },
};
</script>

<template>
    <div class="p-[8vw]">
        <h2 class="mb-4 font-bold">Page non trouvée</h2>
        <h4 class="font-sans text-orange">Erreur 404</h4>
        <p class="pt-4 text-xl">Cette page n'existe pas : {{ $route.fullPath }}</p>
        <div class="max-w-[500px] mx-auto">
            <form action="https://www.google.com/search" method="GET" target="_blank" @submit.prevent="submitForm"
                class="mx-auto my-6">
                <label for="q" class="font-sans text-xl enter text-l lg:text-xl">Que
                    cherchez-vous&nbsp;?</label><br>
                <input class="px-8 py-4 my-4 form" type="text" id="q" name="q" v-model="q">
                <button class="block mx-auto mt-4 btn" type="submit">RECHERCHER</button>
            </form>
        </div>
    </div>
</template>