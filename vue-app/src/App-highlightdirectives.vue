<!-- Custom Directives with in component -->
<script setup>
const vHighlight = {

mounted: (element) => {
    //
    element.addEventListener('mousemove', evt => {
         highLight('yellow')
    })
    element.addEventListener('mouseleave', evt => {
        highLight(null)
    })
    const highLight = color => {
        element.style.backgroundColor = color
    }
}
}
</script>
<template>
    <div v-highlight>
        <h1>Vue</h1>
    </div>
</template>