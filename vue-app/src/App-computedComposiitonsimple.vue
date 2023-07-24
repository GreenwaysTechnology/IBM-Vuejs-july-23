<script setup>
import { computed, ref } from 'vue';
const product = ref(2)
const productNo = computed(() => {
    return product.value
})
</script>
<template>
    <div>
        <h1>{{ productNo }}</h1>
    </div>
</template>