<script lang="ts">
import { defineComponent } from 'vue';

import CardPhoto from '@/components/CardPhoto.vue';
import localisation from '@/components/icons/localisation.vue';

export default defineComponent({
    data() {
        return {
            titre: "" as string,
            description: "" as string,
            categorie: "" as string,
            adresse: "" as string,
            photo: null as File | null,
            // Autres données de l'annonce
        };
    },
    methods: {
        creerAnnonce(): void {
            // Logique de création d'annonce
        },
    },
    components: { localisation, CardPhoto }
});
</script>

<template>
    <div class="flex flex-col w-4/5 gap-4 mx-auto my-8 lg:w-2/5">
        <h3 class="text-center">Vous allez faire des heureux !</h3>
        <label class="font-serif text-3xl font-bold text-center">Type</label>
        <select v-model="categorie" class="form">
            <option disabled value="">Sélectionnez une catégorie</option>
            <option>Légume</option>
            <option>Mixte</option>
            <option>Fruit</option>
        </select>
        <div>
            <label for="titre" class="font-serif text-3xl font-bold">Titre de l'annonce</label>
            <input type="text" v-model="titre" class="mb-0 form"
                placeholder="Ex: pommes, poivrons rouges, lot de légumes...">
            <p class="mr-0 text-base text-right">Max 30 caractères</p>
        </div>

        <div>
            <label for="description" class="font-serif text-3xl font-bold">Description</label>
            <textarea v-model="description" class="mb-0 form"
                placeholder="Ex: Cerises à venir cueillir sur le secteur de Pujols. Disponible cette semaine à partir de 16h."
                rows="4"></textarea>
            <p class="mr-0 text-base text-right">Max 200 caractères</p>
        </div>
        <label for="file" class="font-serif text-3xl font-bold text-center">Photo(s)</label>

        <div class="flex justify-center w-full gap-[4vw] mb-6">
            <CardPhoto />
            <CardPhoto />
            <CardPhoto class="hidden md:block" />
        </div>
        <label class="font-serif text-3xl font-bold">Adresse</label>
        <input type="adresse" v-model="adresse" class="form" placeholder="Ex : 156 Rte de Cancon, 47440 Pailloles">

        <h5 class="mb-2 text-center">Ou me localiser</h5>
        <button @click="" class="block p-4 mx-auto mb-16 rounded-lg bg-darkgreen active:shadow-1 active:-translate-y-1">
            <localisation />
        </button>




        <button @click="creerAnnonce" class="block mx-auto rounded-full btn">Créer l'annonce</button>
    </div>
</template>




