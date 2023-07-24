<script setup>
import { computed, reactive } from 'vue';

const author = reactive({
    name: 'Subramanian',
    trainings: [
        'Vue 3',
        'React js',
        'Microservices'
    ]
})
//computed method enables caching by default
const isTrainingDone = computed(() => {
    console.log('computed property method')
    return author.trainings.length > 0 ? "Yes" : "No"

})
//normal method gets called every time...
const isTrainingHandled = () => {
    console.log('Normal method')
    return author.trainings.length > 0 ? "Yes" : "No"
}
</script>
<template>
    <h1>{{ isTrainingDone }}</h1>
    <h1>{{ isTrainingHandled() }}</h1>

    <h1>{{ isTrainingDone }}</h1>
    <h1>{{ isTrainingHandled() }}</h1>
</template>