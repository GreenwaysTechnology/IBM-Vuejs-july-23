<script setup>
import { provide, ref, readonly } from 'vue';
import Child1 from './components/providers/Child1.vue';
const message = ref('Hello')
provide('message', readonly(message))
</script>
<template>
    <h1>Root</h1>
    <Child1 />
</template>