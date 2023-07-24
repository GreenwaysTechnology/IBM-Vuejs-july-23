<script setup>
import { ref } from 'vue';
import TODOS from './mock-data/todos'
const todos = ref(TODOS)

const filter = () => {
    todos.value = todos.value.filter(todo => todo.completed)
}

</script>
<template>
    <div>
        <button @click="filter">FilterByStatus</button>
        <h1>Total Items: {{ todos.length }}</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span>{{ todo.title }} {{ todo.completed ? "Completed" : "Not Completed" }}</span>
            </li>
        </ul>
    </div>
</template>