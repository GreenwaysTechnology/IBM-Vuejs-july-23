<script setup>
import Child2 from './Child2.vue';
const props = defineProps(['message'])
</script>
<template>
    <h1>Child 1</h1>
    <Child2 :message="props.message" />
</template>