<template>
    <div>
        <div class="slider-component">
            <div class="slidecontainer">
                <input v-model="currentValue" type="range" :min="min" :max="max" class="slider" @input="onInput">
            </div>
        </div>
    </div>
</template>

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
