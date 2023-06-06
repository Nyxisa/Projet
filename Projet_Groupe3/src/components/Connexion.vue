<script setup lang="ts">
import close from './icons/close.vue';
import backend from '@/backend';

export 
</script>
<template>
    <div class="flex flex-col gap-8 mx-auto my-20 bg-white w-fit">
        <div class="flex items-center justify-between p-4 rounded-t-xl bg-grey">
            <h5>Connexion</h5>
            <close />
        </div>
        <div class="flex gap-8 px-8">
            <div class="w-[500px] border-grey border-2 rounded-xl">
                <div class="flex flex-col p-8">
                    <h2 class="text-center text-darkgreen">Déjà client ?</h2>
                    <p class="text-center">Se connecter</p>
                    <form @submit.prevent="submitForm" class="">
                        <div>
                            <label for="email" class="font-serif text-3xl font-bold">Email</label>
                            <input v-model="email" type="email" id="login" placeholder="Entrez votre adresse e-mail"
                                class="form">
                        </div>
                        <div>
                            <label for="password" class="font-serif text-3xl font-bold">Mot de passe</label>
                            <input v-model="password" id="passwd" placeholder="Entrez votre mot de passe" class="form">
                        </div>
                        <button v-on:click="login()" type="submit" class="block mx-auto mt-6 btn">S'identifier</button>
                    </form>
                </div>
            </div>
            <div class="w-[500px] border-grey border-2 rounded-xl">
                <div class="flex flex-col p-8">
                    <h2 class="text-center text-darkgreen">Pas de compte ?</h2>
                    <p class="text-center">Créer un compte</p>
                    <form @submit.prevent="submitForm" class="">
                        <div>
                            <label for="email" class="font-serif text-3xl font-bold">Email</label>
                            <input v-model="email" type="email" id="login" placeholder="Entrez votre adresse e-mail"
                                class="form">
                        </div>
                        <div>
                            <label for="password" class="font-serif text-3xl font-bold">Mot de passe</label>
                            <input v-model="password" id="passwd" placeholder="Entrez votre mot de passe" class="form">
                            <input v-model="password" id="passwd" placeholder="Confirmez votre mot de passe" class="form">
                        </div>
                        <button v-on:click="register()" type="submit" class="block mx-auto mt-6 btn">Créer mon compte</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>