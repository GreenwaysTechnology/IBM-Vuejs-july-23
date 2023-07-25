<script setup>
const props = defineProps(['message'])

</script>
<template>
    <h1>Child 3 {{ props.message }}</h1>
</template>