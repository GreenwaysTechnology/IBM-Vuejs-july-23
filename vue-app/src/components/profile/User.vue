<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'Name is Missing'
    },
    disabled: {
        type:Boolean,
        default:false 
    }

})
</script>
<template>
    <div>
        <h1>User Page</h1>
        <h2>Name {{ props.name }} </h2>
        <h3>Status {{props.disabled}}</h3>
    </div>
</template>
<style></style>