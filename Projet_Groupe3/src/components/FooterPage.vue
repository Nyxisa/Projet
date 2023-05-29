<script setup lang="ts">
import Logo from '@/components/icons/logo.vue'
import facebook from '@/components/icons/facebook.vue'
import instagram from '@/components/icons/instagram.vue'

</script>

<template>
    <footer>
        <div class="w-full gap-5 py-8 bg-brown md:grid">
            <div class="flex flex-row justify-center col-span-2 col-start-2 gap-4 md:flex-col md:gap-0">
                <RouterLink to="/" class="block">
                    <Logo />
                </RouterLink>
                <div class="gap-4 md:flex-col md:flex">
                    <div>
                        <ul>
                            <li class="font-sans text-sm text-white">6 rue du château</li>
                            <li class="font-sans text-sm text-white">Montbéliard 25200</li>
                            <li class="font-sans text-sm text-white">FRANCE</li>
                        </ul>
                    </div>
                    <div class="flex gap-4 mt-2">
                        <a href="#">
                            <facebook />
                        </a>
                        <a href="#">
                            <instagram />
                        </a>
                    </div>
                </div>
            </div>

            <nav class="my-6 md:grid md:col-span-2 md:col-start-4">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">La cagette fermière</h4>
                <RouterLink to="/" class="footer-link">Nos produits</RouterLink>
                <RouterLink to="/" class="footer-link">Nos cagettes</RouterLink>
                <RouterLink to="/" class="footer-link">Faire un don de produits</RouterLink>
            </nav>

            <nav class="my-6 md:grid md:col-span-2 md:col-start-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">À propos</h4>
                <RouterLink to="/" class="footer-link">Qui sommes-nous</RouterLink>
                <RouterLink to="/" class="footer-link">Nos partenaires</RouterLink>
                <RouterLink to="/" class="footer-link">Nos producteurs</RouterLink>
            </nav>

            <nav class="my-6 md:grid md:col-span-2 md:col-start-8">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Informations</h4>
                <RouterLink to="/" class="footer-link">Politique de confidentalité</RouterLink>
                <RouterLink to="/" class="footer-link">Utilisation des cookies</RouterLink>
                <RouterLink to="/" class="footer-link">Mentions légales</RouterLink>
            </nav>

            <div class="my-6 md:grid md:col-span-2 md:col-start-10">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Nous contacter</h4>
                <p class="footer-link">Téléphone ou mail</p>
                <a href="tel:0769408355" class="footer-link">07 69 40 83 55</a>
                <a href="mailto:lacagettefermiere@gmail.com" class="footer-link">lacagettefermiere@gmail.com</a>
            </div>

        </div>
    </footer>
</template>


