<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        onIncrement() {
            //access state and mutate
            this.counter++
        },
        onDecrement() {
            //access state and mutate
            this.counter--
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>

    </div>
</template>