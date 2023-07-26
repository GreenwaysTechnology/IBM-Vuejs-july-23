<script setup>
import { ref } from 'vue';

 const initalColor = ref('green')
</script>
<template>
    <h1 v-highlight:value="initalColor">Vue</h1>
    <h1 v-highlight:foo.bar="color">HighLight</h1>
</template>