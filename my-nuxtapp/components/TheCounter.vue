<script setup>
//Name of the state, and reactive value
const counter = useState('counter', () => 1)
</script>
<template>
    <div>
        <h1>Counter {{counter }}</h1>
        <button @click="counter++">+</button>
    </div>
</template>