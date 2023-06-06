<script setup lang="ts">
import Envoyer from '@/components/icons/envoyer.vue';

</script>

<template>
    <div class="flex-1 h-[90vh] lg:h-[82vh] flex flex-col justify-between w-[100vw]">
        <!-- Affichage des messages -->
        <div class="p-4">
            <div class="flex flex-col justify-around space-y-4">
                <div class="flex items-end justify-end space-x-2">
                    <div class="p-2 text-white rounded-lg bg-lightgreen">
                        <p>Bonjour, je suis intéressé par les pommes que vous donnez</p>
                        <span class="block text-right">16:42</span>
                    </div>
                    <img class="w-8 h-8 rounded-full" src="/img/avatar-2.webp" alt="User Avatar">
                </div>
                <div class="flex items-end justify-end space-x-2">
                    <div class="p-2 text-white rounded-lg bg-lightgreen">
                        <p>À quel moment seriez-vous disponible pour que je puisse les récupérer ?</p>
                        <span class="block text-right">16:43</span>
                    </div>
                    <img class="w-8 h-8 rounded-full" src="/img/avatar-2.webp" alt="User Avatar">
                </div>
                <div class="flex items-start space-x-2">
                    <img class="w-8 h-8 rounded-full" src="/img/avatar.webp" alt="User Avatar">
                    <div class="p-2 rounded-lg bg-grey">
                        <p>Bonjour, je suis disponible toute la semaine, donnez moi l'horaire qui vous convient le
                            mieux.</p>
                        <span class="">18:21</span>
                    </div>
                </div>
                <div class="flex items-end justify-end space-x-2">
                    <div class="p-2 text-white rounded-lg bg-lightgreen">
                        <p>Je peux venir les chercher demain soir !</p>
                        <span class="block text-right">18:54</span>
                    </div>
                    <img class="w-8 h-8 rounded-full" src="/img/avatar-2.webp" alt="User Avatar">
                </div>
                <div class="flex items-start space-x-2">
                    <img class="w-8 h-8 rounded-full" src="/img/avatar.webp" alt="User Avatar">
                    <div class="p-2 rounded-lg bg-grey">
                        <p>D'accord, à demain</p>
                        <span class="">19:02</span>
                    </div>
                </div>
                <!-- Ajoutez d'autres messages ici -->
            </div>
        </div>

        <!-- Formulaire d'envoi de messages -->
        <div class="p-2">
            <div class="flex space-x-2">
                <input type="text" class="flex-1 px-4 py-2 border rounded-lg border-grey focus:outline-none"
                    placeholder="Écrivez votre message ici...">
                <button class="flex items-center gap-2 px-2 py-1 text-white uppercase rounded-lg bg-lightgreen">Envoyer
                    <Envoyer />
                </button>
            </div>
        </div>
    </div>
</template>