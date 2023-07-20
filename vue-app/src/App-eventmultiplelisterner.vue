<script setup>
const onMouseEnter = (evt) => {
    console.log('onMouseEnter')
}
const onMouseLeave = (evt) => {
    console.log('onMouseLeave')
}
</script>
<template>
    <div>
        <div v-on="{ mouseenter:onMouseEnter,mouseleave:onMouseLeave}">
            Touch
        </div>
    </div>
</template>
<style></style>