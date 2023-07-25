<script setup>
import { ref } from 'vue'
const message = ref('Hello')
const name = ref('Subramanian')
</script>
<template>
    <!-- send data to parent via slot -->
    <slot :message="message" :firstName="name"></slot>
</template>
<style></style>