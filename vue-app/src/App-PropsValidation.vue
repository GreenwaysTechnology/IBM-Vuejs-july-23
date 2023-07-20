<script setup>
import User from './components/profile/User.vue';
const name = "Subramanian" 
// const name = 122323
const disabled = true
</script>
<template>
    <User :name="name" :disabled="disabled"></User>
    <!-- Boolean :Boolean has special casting rules to mimic the behavior of the native boolean elements -->
    <User disabled></User>
    <User></User>

</template>
<style></style>