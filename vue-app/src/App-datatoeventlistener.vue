<script setup>
const getData = (data,evt) => {
    console.log(data,evt)
}
</script>
<template>
    <div>
        <button @click="getData('Hello',$event)">Pass Data</button>
    </div>
</template>
<style></style>