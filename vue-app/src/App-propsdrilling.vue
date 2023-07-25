<script setup>
import { ref } from 'vue';
import Child1 from './components/propsdrilling/Child1.vue';
const message = ref('Hello')
</script>
<template>
    <h1>Root</h1>
    <Child1 :message="message" />
</template>