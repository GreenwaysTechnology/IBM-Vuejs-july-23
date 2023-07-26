<!-- Custom Directives with in component -->
<script setup>

//declare directive Object
const vFocus = {
    //directive life cycle method
    mounted: element => {
        console.log(element)
        //any dom manipulation
        element.style.backgroundColor = 'yellow'
        element.focus()
    }
}

</script>
<template>
    <!-- Attach directive -->
    <input v-focus >
</template>