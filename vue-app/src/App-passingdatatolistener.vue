<script setup>
import { ref } from 'vue'
let counter = ref(0)
const onIncrement = () => {
    console.log(counter.value)
    counter.value++
}
const onDecrement = () => {
    counter.value--
}
const onIncrementBy = (payload, event) => {
    counter.value += payload
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>
        <button @click="onIncrementBy(5, $event)">IncrementBy</button>

    </div>
</template>