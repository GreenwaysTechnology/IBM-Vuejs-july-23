<script setup>
const props = defineProps(['counter'])
</script>
<template>
    <h1>Counter Display {{ props.counter }}</h1>
</template>