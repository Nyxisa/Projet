<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import { useHead } from 'unhead';
import { Suspense } from 'vue';

useHead({
  title: 'La Cagette Fermière'
})
</script>

<template>
  <HeaderPage />

  <main class="pt-[64px] md:pt-[72px] lg:pt-[128px]">
      <Suspense>
        <RouterView />
      </Suspense>
  </main>

  <FooterPage />
</template>

<!-- <script lang="ts">
import { pb } from './backend';
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb.collection("users").authWithPassword(document.getElementById("login").value, document.getElementById("passwd").value);
    },
    //this method allows the already registred user to log in the system.
    async register() {
      await pb.collection("users").create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: "John Di",
      });
    }
  },
  components: { HeaderPage, FooterPage }
}
</script> -->
