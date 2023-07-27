<script setup>
import { ref } from 'vue';
const like = ref(0)
</script>
<template>
    <div>
        <h2>Reviews {{like }}</h2>
        <button @click="like++">Like</button>
    </div>
</template>