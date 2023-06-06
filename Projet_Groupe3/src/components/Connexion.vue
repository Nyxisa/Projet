<!-- <script setup lang="ts">
import close from './icons/close.vue';
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb: PocketBase | null = null;

const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090');

    pb.authStore.onChange(() => {
        currentUser.value = pb!.authStore.model
    }, true)

});

const doLogout = () => {
    pb!.authStore.clear();
    currentUser.value = null;
}

const doLogin = async () => {
    try {
        const authData = await pb!.collection('users')
            .authWithPassword(username.value, password.value);


        console.log(pb!.authStore.isValid);
        console.log(pb!.authStore.token);
        console.log(pb!.authStore.model);

    } catch (error) {
        alert(Error)
    }
}

const doCreateAccount = async () => {
    try {
        const data = {
            "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
            "email": username.value,
            "emailVisibility": true,
            "password": password.value,
            "passwordConfirm": password.value,
            "name": fullName.value
        };

        const record = await pb!.collection('users').create(data);

        await doLogin();

    } catch (error) {
        alert(Error)
    }
}

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
                    <div>
                        <label for="email" class="font-serif text-3xl font-bold">Email</label>
                        <input v-model="username" type="email" id="login" placeholder="Entrez votre adresse e-mail"
                            class="form">
                    </div>
                    <div>
                        <label for="password" class="font-serif text-3xl font-bold">Mot de passe</label>
                        <input v-model="password" id="password" placeholder="Entrez votre mot de passe" class="form">
                    </div>
                    <button @click="doLogin" type="submit" class="block mx-auto mt-6 btn">S'identifier</button>

                </div>
            </div>
            <div class="w-[500px] border-grey border-2 rounded-xl">
                <div class="flex flex-col p-8">
                    <h2 class="text-center text-darkgreen">Pas de compte ?</h2>
                    <p class="text-center">Créer un compte</p>

                    <div>
                        <label for="email" class="font-serif text-3xl font-bold">Email</label>
                        <input v-model="username" type="email" id="login" placeholder="Entrez votre adresse e-mail"
                            class="form">
                    </div>
                    <div>
                        <label for="password" class="font-serif text-3xl font-bold">Mot de passe</label>
                        <input v-model="password" id="password" placeholder="Entrez votre mot de passe" class="form">
                        <input v-model="password" id="password" placeholder="Confirmez votre mot de passe" class="form">
                    </div>
                    <button @click="doCreateAccount" type="submit" class="block mx-auto mt-6 btn">Créer mon
                        compte</button>

                </div>
            </div>
        </div>
    </div>
</template> -->





<script setup lang="ts">
import close from './icons/close.vue';

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
                        <button v-on:click="register()" type="submit" class="block mx-auto mt-6 btn">Créer mon
                            compte</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>