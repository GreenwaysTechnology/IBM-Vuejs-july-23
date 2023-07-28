<script setup>
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore()
console.log(counterStore)
</script>
<template>
    <div>
        <h1>Counter Store {{counterStore.counter }} Double It {{counterStore.doubeIt }}</h1>
        <button @click="counterStore.increment">+</button>
    </div>
</template>