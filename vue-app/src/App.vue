<script setup>
import { ref } from 'vue';
import MyButton from './components/attributeinheritence/MyButton.vue'

const title = ref('Click')
</script>
<template>
    <MyButton :title="title" class="fancy-btn"></MyButton>
</template>
<style>
.fancy-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 16px;
}
</style>