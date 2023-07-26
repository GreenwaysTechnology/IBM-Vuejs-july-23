<!-- Mouse tracking within component -->
<script setup>
import { useMouseTrack } from './composables/moustracker'
const { x, y } = useMouseTrack()
</script>
<template>
    <h1>Mouse Positions are at X:{{ x }} And Y {{ y }}</h1>
</template>