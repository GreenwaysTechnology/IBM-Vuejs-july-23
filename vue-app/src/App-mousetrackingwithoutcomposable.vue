<!-- Mouse tracking within component -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const x = ref(0)
const y = ref(0)

const update = evt => {
    x.value = evt.pageX
    y.value = evt.pageY
}
onMounted(() => {
    //dom listener
    window.addEventListener('mousemove', update)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', update)
})
</script>
<template>
    <h1>Mouse Positions are at X:{{ x }} And Y {{ y }}</h1>
</template>