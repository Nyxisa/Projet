<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    methods: {
        onInput() {
            // Convertir la valeur en string
            const valueAsString = this.currentValue.toString();
            // Émettre l'événement avec la valeur convertie en nombre
            this.$emit('input', parseInt(valueAsString));
        }

    }
});
</script>

<template>
    <div>
        <div class="slider-component">
            <div class="slidecontainer">
                <input v-model="currentValue" type="range" :min="min" :max="max"
                    class="w-[500px] [&::-webkit-slider-runnable-track]:h-4 appearance-none [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-lightgreen [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brown [&::-webkit-slider-thumb]:-translate-y-2"
                    @input="onInput">
            </div>
        </div>
    </div>
</template>
