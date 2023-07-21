<script setup>
import { reactive } from 'vue';
import TODOS from './mock-data/todos'
const todos = reactive(TODOS)
</script>
<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                <span>{{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>
<style></style>