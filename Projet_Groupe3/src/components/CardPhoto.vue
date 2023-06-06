<script setup lang="ts">
</script>

<template>
    <div class="p-2 bg-white w-[130px] rounded-xl shadow-1 lg:w-[245px]">
        <label for="photo"
            class="flex flex-col items-center justify-center w-full pb-2 border-2 border-none rounded-lg cursor-pointer bg-grey h-fit lg:p-4">
            <div class="flex flex-col items-center justify-center">
                <p class="pt-2 mx-4 text-sm text-center lg:text-base">Cliquer pour sélectionner une image</p>
                <svg aria-hidden="true" class="w-10 h-10" fill="none" stroke="darkgreen" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                    </path>
                </svg>
            </div>
            <input id="photo" type="file" class="hidden" />
        </label>
        <h4 class="text-center">Photo 1</h4>
    </div>
</template>
