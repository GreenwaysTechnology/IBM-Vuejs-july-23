<script setup>
import { ref } from 'vue';
import Counter from './components/counter/CounterVue.vue'

const counter = ref(0)
const getChildData = data => {
    console.log(data)
    counter.value = data
}
</script>
<template>
    <h1>Parent</h1>
    <h2>Child Counter Data {{ counter}}</h2>
    <hr>
    <Counter @on-request="getChildData"></Counter>
</template>