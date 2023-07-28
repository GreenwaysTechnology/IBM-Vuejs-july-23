<script setup>
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore()
</script>
<template>
    <div>
        <!-- <h2>Counter {{ counterStore.count }} Double Counter {{counterStore.doubleIt }}</h2> -->
         <h2>Counter {{ counterStore.value }} Double Counter {{counterStore.doubleIt }}</h2>
        <button @click="counterStore.increment">+</button>
    </div>
</template>