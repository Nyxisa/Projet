<script setup lang="ts">
import Logo from '@/components/icons/logo.vue'
import facebook from '@/components/icons/facebook.vue'
import instagram from '@/components/icons/instagram.vue'

</script>

<template>
    <footer>
        <div class="justify-center gap-8 py-8 md:px-8 lg:grille bg-brown md:flex">
            <div class="flex flex-row justify-center col-span-3 col-start-1 gap-4 md:flex-col md:gap-0">
                <RouterLink to="/" class="block">
                    <Logo />
                </RouterLink>
                <div class="gap-4 lg:flex-col lg:flex">
                    <div>
                        <ul>
                            <li class="font-sans text-sm text-white">16 Rue des Fontanelles</li>
                            <li class="font-sans text-sm text-white">Villeneuve-sur-Lot, 47300</li>
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

            <nav class="col-span-2 col-start-4 my-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">La cagette fermière</h4>
                <RouterLink to="/products" class="footer-link">Nos produits</RouterLink>
                <RouterLink to="/abonnements" class="footer-link">Nos cagettes</RouterLink>
                <RouterLink to="/dons" class="footer-link">Faire un don de produits</RouterLink>
            </nav>

            <nav class="col-span-2 col-start-6 my-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">À propos</h4>
                <RouterLink to="/about" class="footer-link">Qui sommes-nous&nbsp;?</RouterLink>
                <RouterLink to="/partenaires" class="footer-link">Nos partenaires</RouterLink>
                <RouterLink to="/productors" class="footer-link">Nos producteurs</RouterLink>
            </nav>

            <nav class="col-span-2 col-start-8 my-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Informations</h4>
                <RouterLink to="/legals#1" class="footer-link">Politique de confidentalité</RouterLink>
                <RouterLink to="/legals#2" class="footer-link">Utilisation des cookies</RouterLink>
                <RouterLink to="/legals#3" class="footer-link">Mentions légales</RouterLink>
            </nav>

            <div class="col-span-3 col-start-10 my-6">
                <h4 class="font-serif text-2xl text-center text-white md:text-left">Nous contacter</h4>
                <RouterLink to="/contact" class="footer-link">Formulaire de contact</RouterLink>
                <a href="tel:0769408355" class="footer-link">07 69 40 83 55</a>
                <a href="mailto:lacagettefermiere@gmail.com" class="footer-link">lacagettefermiere@gmail.com</a>
            </div>

        </div>
    </footer>
</template>


