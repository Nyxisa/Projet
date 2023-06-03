<script lang="ts">
import { defineComponent } from 'vue';
import { pb } from '@/backend';

export default defineComponent({
    data() {
        return {
            nom: '',
            prenom: '',
            mail: '',
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
                    mail: this.mail,
                    objet: this.objet,
                    message: this.message,
                });
                // Réinitialiser les champs après l'envoi du formulaire
                this.nom = '';
                this.prenom = '';
                this.mail = '';
                this.objet = '';
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
    <div class="m-auto my-8">
        <form @submit.prevent="submitForm" class="">
                <div>
                    <label for="prenom" class="block">Prénom</label>
                    <input v-model="prenom" type="text" id="prenom" placeholder="Entrez votre prénom" class="form">
                </div>
                <div>
                    <label for="nom" class="block">Nom</label>
                    <input v-model="nom" type="text" id="nom" placeholder="Entrez votre nom" class="form">
                </div>
                <div>
                    <label for="email" class="block">Adresse e-mail</label>
                    <input v-model="mail" type="email" id="email" placeholder="Entrez votre adresse e-mail" class="form">
                </div>
                <div>
                    <label for="message" class="block">Message</label>
                    <textarea v-model="message" id="message" placeholder="Entrez votre message ici" rows="4"
                        class="form"></textarea>
                </div>
                <button type="submit" class="">Envoyer</button>
            </form>
            </div>
</template>

