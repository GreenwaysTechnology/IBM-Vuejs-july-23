<script>
export default {
    data() {
        return {
            status: true
        }
    },
    computed: {
        toggle() {
            if (this.status) {
                return true
            } else {
                return false
            }
        }
    }

}
</script>
<template>
    <h1>Value {{ toggle }}</h1>
    <button @click="status = !status">Toggle</button>
</template>
