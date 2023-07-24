<script>
export default {
    data() {
        return {
            number: 2
        }
    },
    computed: {
        doubleIt() {
            return this.number * 2
        }
    }

}
</script>
<template>
    <h1>Value {{ doubleIt }}</h1>
</template>
