<script setup>
import { ref } from 'vue';
import { useFetch } from './composables/fetch'
const url = ref('https://jsonplaceholder.typicode.com/todos')

const { data, error } = useFetch(url)
</script>
<template>
    <div>
        <h1>Todo App</h1>
        <!-- Conditional rendering : v-if...v..else-if -->
        <div v-if="error">{{ error.message }}</div>
        <div v-else-if="data">
            <ul>
                <li v-for="todo of data">
                    {{ todo.title }}
                </li>
            </ul>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>