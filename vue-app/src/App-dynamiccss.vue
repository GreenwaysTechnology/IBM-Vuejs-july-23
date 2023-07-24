<script setup>
import { ref } from 'vue';
const isActive = ref(false)

const hightLight = () => {
    if (isActive.value) {
        isActive.value = false
    } else {
        isActive.value = true
    }
}
</script>
<template>
    <h1 @mouseover="hightLight" :class="{ active: isActive }">Hello</h1>
</template>
<style>
.active {
    color: red;
}
</style>