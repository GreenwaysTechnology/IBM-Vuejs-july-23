<script setup>
import { inject } from 'vue';
// const message = inject('message')
//default value
// const message = inject('message','default Message')

let message = inject('message')

let companyName = inject('companyName')
console.log(message)
message.value = 'How are you'

console.log(message)
</script>
<template>
    <h1>Child 3 {{message }}  {{companyName }}</h1>
</template>