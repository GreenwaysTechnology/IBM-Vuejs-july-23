<script setup>
import { reactive, toRefs } from 'vue';

const { like, dislike, recommend } = toRefs(reactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
}))
console.log(recommend)
const onLike = () => {
    like.value++
}

</script>
<template>
    <h1>Reactive State</h1>
    <h1>Like : {{ like }} Dislike {{ dislike }} Rating Value {{ recommend.rating.value }}</h1>
    <button @click="onLike">Like</button>
    <button @click="dislike++">Dislike</button>
    <button @click="recommend.rating.value++">Rating</button>
</template>
<style></style>