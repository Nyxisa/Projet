<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 44.381293, lng: 0.709051 }
</script>

<template>
    <GoogleMap api-key="AIzaSyBK0k0Zt5F0XUPUiXaj3C1t3ZBnopTcyeg" style="width: 100%; height:40vh" :center="center"
        :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

 

