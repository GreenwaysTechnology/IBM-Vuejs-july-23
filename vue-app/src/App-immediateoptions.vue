<script setup>
import { reactive, watch } from 'vue';

const comments = reactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
})
//watchers which watches all properties including ensted property
// watch(comments, (newValue, oldValue) => {
//     console.log('oldValue=>', oldValue, 'newValue=>', newValue)
//     console.log('old value=>', oldValue.recommend.rating.value)
//     console.log('new value=>', newValue.recommend.rating.value)

// })
//watchers which watches disable inner property changes

watch(comments, (newValue, oldValue) => {
    console.log('oldValue=>', oldValue)
    console.log('newValue=>', newValue)
  
}, {
    // deep: true
    immediate: true
})
</script>
<template>
    <h1>Reactive State with Watchers</h1>
    <h1>Like : {{ comments.like }} Dislike {{ comments.dislike }} Rating Value {{ comments.recommend.rating.value }}</h1>
    <button @click="comments.like++">Like</button>
    <button @click="comments.dislike++">Dislike</button>
    <button @click="comments.recommend.rating.value++">Rating</button>
</template>
<style></style>