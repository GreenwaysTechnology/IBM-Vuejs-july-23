<!-- Custom attributes : v-text and v-html -->
<script setup>
const name = 'Subramanian'
</script>
<template>
    <h1>Interpolation Using "moustache" notation</h1>
    <h2>Name {{name}}</h2>
    <h1>Interpolation Using Directive-text</h1>
    <h2 v-text=" `Name ${name} `" ></h2>
    <h1>Interpolation Using Directive-html</h1>
    <h2 v-html=" `Name ${name} `" ></h2>

</template>
<style>

</style>