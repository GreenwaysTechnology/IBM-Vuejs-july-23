<!-- Event handling in options Api -->
<!-- <script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        //listeners will go
        onIncrement(evt) {
            console.log('onIncrement')
        }
    }
}
</script> -->

<!-- Setup function -->
<!-- <script>
export default {
    setup() {
        const counter = 0;
        //listener 
        const onIncrement = () => {
            console.log('onIncrement')
        }
        //you must return object , inside you should encaspulate listeners
        return {
            counter,
            onIncrement
        }
    }
}
</script> -->
<!-- Setup attribute -->
<script setup>
const counter = 0;
//listener 
const onIncrement = () => {
    console.log('onIncrement')
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button v-on:click="onIncrement">Click</button>
        <button @:click="onIncrement">Click</button>

    </div>
</template>
<style></style>