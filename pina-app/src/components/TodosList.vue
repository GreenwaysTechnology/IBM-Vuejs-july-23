<script setup>
import { onMounted } from 'vue'
import { useTodosStore } from '../stores/todos';
const todosStore = useTodosStore();

onMounted(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    todosStore.getTodos(url) //When you trigger this api,getters would have been populted
})
</script>
<template>
    <div v-for="todo in todosStore.todoslist">
        <h3>{{ todo.id }} {{ todo.title }}</h3>
    </div>
</template>
<style></style>