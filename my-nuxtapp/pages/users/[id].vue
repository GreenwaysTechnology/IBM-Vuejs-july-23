<script setup>
const route = useRoute()
console.log(route)
</script>
<template>
    <h1>Users {{ $route.params.id }} details</h1>
</template>