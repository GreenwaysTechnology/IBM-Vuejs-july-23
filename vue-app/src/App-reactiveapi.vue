<script setup>
import { reactive, ref } from 'vue'

const state = { count: 0 }
const counter = reactive(state)

console.log(counter === state)

const onIncrement = () => {
    counter.count++
}
</script>
<template>
    <div>
        <h1>Counter {{ counter.count }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>
<style></style>