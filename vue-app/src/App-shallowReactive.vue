<script setup>
import { shallowReactive } from 'vue';

const comments = shallowReactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
})
</script>
<template>
     <h1>Reactive State</h1>
     <h1>Like : {{comments.like }} Dislike {{comments.dislike }} Rating Value {{comments    .recommend.rating.value }}</h1>
     <button @click="comments.like++">Like</button>
     <button @click="comments.dislike++">Dislike</button>
     <button @click="comments.recommend.rating.value++">Rating</button>

</template>
<style></style>