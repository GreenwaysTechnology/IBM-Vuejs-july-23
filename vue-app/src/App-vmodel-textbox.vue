<script setup>
import { ref } from 'vue';
const name = ref('Your Name')

</script>
<template>
    <h1>Form - Input Handling</h1>
    <h1>{{ name}}</h1>
    <input v-model="name" />
</template>
<style></style>