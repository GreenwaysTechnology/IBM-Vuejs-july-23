<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';

const counter = ref(0)
onBeforeMount(() => {
    console.log('onBefore Mount')
})
onMounted(() => {
    console.log('onMounted')
})
onUpdated(() => {
    console.log('OnUpdated')
})
</script>
<template>
    <div>
        <h1>Component life cycle methods</h1>
        <span @click="counter++">{{ counter }}</span>
    </div>
</template>