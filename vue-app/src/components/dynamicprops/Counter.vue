<script setup>
import { ref } from 'vue';
import CounterDisplay from './CounterDisplay.vue';
// State Variable
const counter = ref(0)
</script>
<template>
    <div class="box">
        <h1 style="color: blue;">Counter</h1>
        <CounterDisplay :counter="counter"></CounterDisplay>
        <button @click="counter++" class="btn">+</button>
    </div>
</template>
<style>
.box {
    background-color: aqua;
}
</style>