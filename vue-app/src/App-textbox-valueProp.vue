<script setup>
import { ref } from 'vue';
const name = ref('Your Name')

// Two way data binding via event object
const getInput = evt => {
    const value = evt.target.value
    console.log(value)
    name.value = value
}
</script>
<template>
    <h1>Form - Input Handling</h1>
    <h1>{{ name}}</h1>
    <input type="text" @input="getInput" :value="name" />
</template>
<style></style>