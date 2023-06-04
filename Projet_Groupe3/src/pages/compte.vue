<script setup lang="ts">
// import { defineComponent } from 'vue';
// import { pb } from '@/backend';

// export default defineComponent({
//     data() {
//         return {
//             nom: '',
//             prenom: '',
//             email: '',
//             adresse: '',
//             telephone: '',
//         };
//     },
//     methods: {
//         async submitForm() {
//             // Enregistrer les données dans la base de données PocketBase
//             try {
//                 await pb.collection('contact').create('contact', {
//                     nom: this.nom,
//                     prenom: this.prenom,
//                     email: this.email,
//                     adresse: this.adresse,
//                     telephone: this.telephone,
//                 });
//                 // Réinitialiser les champs après l'envoi du formulaire
//                 this.nom = '';
//                 this.prenom = '';
//                 this.email = '';
//                 this.adresse = '';
//                 this.telephone = '';
//                 // Rediriger vers une page de confirmation ou autre
//                 this.$router.push('/contact');
//             } catch (error) {
//                 console.error(error);
//                 // Gérer les erreurs d'enregistrement dans la base de données
//             }
//         },
//     },
// });
</script>
<template>
    <div class="relative">
        <img src="/img/title-pic.webp" alt="épis de blé" class="w-full">
        <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <h1 class="top-banner">Votre Compte</h1>
        </div>
    </div>
    <section class="px-[8vw] py-6">
        <h2>Votre identité</h2>
        <p>Les informations recueillies sur ce formulaire sont enregistrées pendant 3 ans par La Cagette Fermière pour que
            vous puissiez passer votre commande.</p>
        <div class="m-auto my-8 xl:w-[550px] lg:w-[400px]">
            <form class="">
                <div>
                    <label for="nom" class="font-serif text-2xl font-bold">Nom</label>
                    <input type="text" id="nom" placeholder="Entrez votre nom" class="form">
                </div>
                <div>
                    <label for="prenom" class="font-serif text-2xl font-bold">Prénom</label>
                    <input type="text" id="prenom" placeholder="Entrez votre prénom" class="form">
                </div>
                <div>
                    <label for="email" class="font-serif text-2xl font-bold">E-mail</label>
                    <input type="email" id="email" placeholder="Entrez votre adresse e-mail" class="form">
                </div>
                <div>
                    <label for="message" class="font-serif text-2xl font-bold">Numéro de téléphone</label>
                    <input type="tel" id="message" placeholder="Entrez votre numéro de téléphone" class="form">
                </div>
                <div>
                    <label for="email" class="font-serif text-2xl font-bold">Adresse</label>
                    <input type="text" id="email" placeholder="Entrez votre adresse postale" class="form">
                </div>
                <button type="submit" class="block mx-auto btn">Enregistrer</button>
            </form>
        </div>
    </section>
    <section class="px-[8vw] py-6">
        <h2 class="mb-4">Vos commandes</h2>
        <p>Vous n’avez rien commandé.</p>
    </section>
    <section class="px-[8vw] py-6">
        <h2 class="mb-4">Vos abonnement</h2>
        <p class="mb-10">Vous n’avez encore aucun abonnement aux cagettes.</p>
        <RouterLink to="/" class="btn">
            S'abonner</RouterLink>
    </section>
</template>