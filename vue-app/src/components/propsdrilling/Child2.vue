<script setup>
import Child3 from './Child3.vue';
const props = defineProps(['message'])

</script>
<template>
    <h1>Child 2</h1>
    <Child3 :message="props.message" />
</template>