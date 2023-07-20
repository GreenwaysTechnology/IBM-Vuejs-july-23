<script setup>
import { ref } from 'vue'
let counter = ref(0)
const onIncrementBy = (payload, event) => {
    counter.value += payload
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <button @click="onIncrementBy(5, $event)">IncrementBy</button>
    </div>
</template>