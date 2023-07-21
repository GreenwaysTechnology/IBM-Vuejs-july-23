<script setup>
import { ref } from 'vue'
const counter = ref({ count: 0 })
const onIncrement = () => {
    counter.value.count++
}
</script>
<template>
    <div>
        <h1>Counter {{ counter.count }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>
<style></style>