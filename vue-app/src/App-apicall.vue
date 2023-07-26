<script setup>
import { onMounted, ref } from 'vue';

const data = ref(null)
const error = ref(null)

const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    try {
        const response = await fetch(url)
        const todos = await response.json()
        //update state 
        data.value = todos;
        console.log(data.value)
    }
    catch (err) {
        error.value = err
    }
}

onMounted(() => {
    fetchData()
})
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