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
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>

    </div>
</template>