<script setup>
import { reactive } from 'vue';

const todos = reactive([])

const addItem = evt => {
    todos.push({ id: Math.random(), text: 'Learn Vue!' })
}
</script>
<template>
    <ul>
        <h1>Todo App</h1>
        <hr />
        <li v-for="todo in todos">
            <span>{{ todo }}</span>
        </li>
        <button @click="addItem">Add Todo</button>
    </ul>
</template>