<script setup lang="ts">
import Chat from '@/components/Chat.vue';

</script>

<template>
    <div class="flex flex-col min-h-screen border-2 border-grey rounded-xl" v-scroll-lock="true">
        <div class="flex flex-1">
            <div class="hidden w-1/3 bg-white border border-grey md:block">
                <!-- Liste des contacts -->
                <div class="p-4">
                    <div class="flex w-full gap-4">
                        <RouterLink to="/messagerie" class="btn-don rounded-xl don">
                            Dons</RouterLink>
                        <RouterLink to="/messagerie" class="bg-orange rounded-xl active:border-orange btn-don don">
                            Sauvetage</RouterLink>
                    </div>
                    <ul class="py-4 space-y-6">
                        <li class="flex items-center space-x-2">
                            <img class="w-16 h-16 rounded-full" src="/img/avatar.webp" alt="User Avatar">
                            <div>
                                <span class="">Marie-Ange</span>
                                <span class="block text-sm">Pommes</span>
                            </div>
                        </li>
                        <li class="flex items-center space-x-2">
                            <img class="w-16 h-16 rounded-full" src="/img/avatar-3.webp" alt="User Avatar">
                            <div>
                                <span class="">Joël</span>
                                <span class="block text-sm">Panier de fruits</span>
                            </div>
                        </li>
                        <!-- Ajoutez d'autres contacts ici -->
                    </ul>
                </div>
            </div>
            <Chat />

        </div>
    </div>
</template>