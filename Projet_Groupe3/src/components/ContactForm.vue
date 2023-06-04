<script lang="ts">
import { defineComponent } from 'vue';
import { pb } from '@/backend';

export default defineComponent({
    data() {
        return {
            nom: '',
            prenom: '',
            email: '',
            objet: '',
            message: '',
        };
    },
    methods: {
        async submitForm() {
            // Enregistrer les données dans la base de données PocketBase
            try {
                await pb.collection('contact').create('contact', {
                    nom: this.nom,
                    prenom: this.prenom,
                    email: this.email,
                    message: this.message,
                });
                // Réinitialiser les champs après l'envoi du formulaire
                this.nom = '';
                this.prenom = '';
                this.email = '';
                this.message = '';
                // Rediriger vers une page de confirmation ou autre
                this.$router.push('/contact');
            } catch (error) {
                console.error(error);
                // Gérer les erreurs d'enregistrement dans la base de données
            }
        },
    },
});
</script>

<template>
    <div class="m-auto my-8 xl:w-[550px] lg:w-[400px] lg:mx-0">
        <form @submit.prevent="submitForm" class="">
            <div>
                <label for="nom" class="font-serif text-2xl font-bold">Nom</label>
                <input v-model="nom" type="text" id="nom" placeholder="Entrez votre nom" class="form">
            </div>
                <div>
                    <label for="prenom" class="font-serif text-2xl font-bold">Prénom</label>
                    <input v-model="prenom" type="text" id="prenom" placeholder="Entrez votre prénom" class="form">
                </div>
                <div>
                    <label for="email" class="font-serif text-2xl font-bold">Adresse e-mail</label>
                    <input v-model="email" type="email" id="email" placeholder="Entrez votre adresse e-mail" class="form">
                </div>
                <div>
                    <label for="message" class="font-serif text-2xl font-bold">Message</label>
                    <textarea v-model="message" id="message" placeholder="Entrez votre message ici" rows="4"
                        class="form"></textarea>
                </div>
                <button type="submit" class="block mx-auto btn">Envoyer</button>
            </form>
            </div>
</template>

