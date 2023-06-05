<template>
    <div class="max-w-md mx-auto">
        <!-- Titre de l'annonce -->
        <input type="text" v-model="titre" class="p-2 mb-4 border border-gray-300" placeholder="Titre de l'annonce">

        <!-- Description de l'annonce -->
        <textarea v-model="description" class="p-2 mb-4 border border-gray-300"
            placeholder="Description de l'annonce"></textarea>

        <!-- Catégorie de l'annonce -->
        <select v-model="categorie" class="p-2 mb-4 border border-gray-300">
            <option value="">Sélectionnez une catégorie</option>
            <!-- Autres options de catégorie -->
        </select>

        <!-- Prix de l'annonce -->
        <input type="number" v-model.number="prix" class="p-2 mb-4 border border-gray-300" placeholder="Prix de l'annonce">

        <!-- Autres champs de l'annonce -->

        <!-- Bouton de soumission -->
        <button @click="creerAnnonce" class="px-4 py-2 text-white bg-blue-500 rounded">Créer l'annonce</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            titre: '' as string,
            description: '' as string,
            categorie: '' as string,
            prix: null as number | null,
            // Autres données de l'annonce
        };
    },
    methods: {
        creerAnnonce(): void {
            // Logique de création d'annonce
        },
    },
});
</script>

<style>
/* Styles supplémentaires pour personnaliser le formulaire */
</style>
