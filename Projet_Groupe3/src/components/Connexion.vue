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
                        <button type="submit" class="block mx-auto mt-6 btn">S'identifier</button>
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
                        <button type="submit" class="block mx-auto mt-6 btn">Créer mon compte</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

        <div>
            <label width="50px">Login : </label><input type="email" id="login">
            <p></p>
            <label width="50px">Password : </label><input type="password" id="passwd">
            <p></p>
            <hr>
            <button v-on:click="register()">Register</button>
            <button v-on:click="login()">Login</button>
            <p></p>
        </div>
    </header>

    <main>
        <!-- <TheWelcome /> -->
    </main>
</template>

<script>
const pb = new PocketBase('http://192.168.1.126:8004')
export default {
    methods: {
        //this method allows a new user to sign up the system. Once done, the user receives an email
        //asking for account validation. Once the validation made the user is added to the system
        async login() {
            await pb.collection('users').authWithPassword(document.getElementById("login").value,
                document.getElementById("passwd").value);
        },
        //this method allows the already registred user to log in the system.
        async register() {
            await pb.collection('users').create({
                email: document.getElementById("login").value,
                password: document.getElementById("passwd").value,
                passwordConfirm: document.getElementById("passwd").value,
                name: 'John Di',
            });
        }

    }
}
</script>