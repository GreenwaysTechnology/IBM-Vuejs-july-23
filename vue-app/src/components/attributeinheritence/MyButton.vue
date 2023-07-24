<script setup>
import { useAttrs } from 'vue'
const props = defineProps(['title'])
const attrs = useAttrs()
console.log(attrs)
</script>
<template>
    <!-- <button>{{ props.title }}</button> -->
    <span>{{$attrs}}</span>
    <div style="background-color: cadetblue;">
        <button v-bind="$attrs">{{ props.title }}</button>
    </div>
    <hr/>
    <div style="background-color: cadetblue;">
        <button v-bind="$attrs">{{ props.title }}</button>
    </div>
</template>
<style>

</style>