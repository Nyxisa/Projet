<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import user from "./icons/user.vue";
import shoppingBag from "./icons/shoppingBag.vue";
import logoLong from "./icons/logoLong.vue";
import { RouterLink } from 'vue-router'
import Logo from './icons/logo.vue';
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
  dirTop.value = y < oldY
})

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

</script>

<template>
  <header aria-label="Header"
    class="fixed z-10 flex items-stretch justify-between w-full px-6 py-2 transition-all duration-300 ease-in-out translate-y-0 bg-white lg:py-0"
    :class="{
      '!-translate-y-full !bg-transparent': !dirTop,
      '!bg-cream lg:!bg-cream': underLimit
    }">
    <div class="flex items-center">
      <RouterLink to="/">
        <logoLong />
      </RouterLink>
    </div>
    <div class="flex items-center justify-end flex-1">
      <nav aria-label="Site Nav"
        class="fixed inset-0 invisible w-screen h-screen text-2xl transition-all duration-300 ease-in-out bg-white opacity-0 lg:bg-opacity-0 md:block lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
        <ul class="items-center text-sm text-black lg:flex-row mt-[10vh] text-center lg:m-0 flex-col flex">
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/products"> Nos produits
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/abonnements"> Nos cagettes
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/dons">Dons
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu" class="menu-link" to="/about"> À propos </RouterLink>
          </li>
          <li class="mt-10 menu-item">
            <RouterLink @click="closeMenu"
              class="text-3xl border-2 border-solid rounded-full menu-link lg:hidden text-orange" to="/">S'inscrire
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink @click="closeMenu"
              class="text-3xl border-2 border-solid rounded-full menu-link lg:hidden text-orange" to="/">Se
              connecter
            </RouterLink>
          </li>
        </ul>
        <RouterLink @click="closeMenu" to="/">
          <Logo class="m-auto mt-[5vh] lg:hidden" />
        </RouterLink>
      </nav>

      <div class="flex items-center">
        <div class="md:flex">
          <li>
            <RouterLink to="/compte"
              class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:fill-lightgreen md:block">
              <user />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/panier"
              class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 md:block">
              <shoppingBag />
            </RouterLink>
          </li>
        </div>

        <button class="relative z-10 flex flex-col justify-between w-8 h-5 ml-5 lg:hidden"
          @click="activeMenu = !activeMenu">
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu, '!bg-black': underLimit }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ 'bg-black opacity-0': activeMenu, '!bg-black': underLimit }"></div>
          <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
            :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu, '!bg-black': underLimit }"></div>
        </button>

      </div>
    </div>

  </header>
</template>
