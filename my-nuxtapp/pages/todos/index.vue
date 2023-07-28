<script setup>
const url ='https://jsonplaceholder.typicode.com/todos'
const { data, pending, error, refresh } = await useFetch(url)
</script>
<template>
    <h1>Todos App : Data fetching</h1>
    <div>
        <ul>
        <li v-for="todo of data">
            <span>
                <span>{{todo.title}}</span>
            </span>
        </li>
    </ul>
    </div>
</template>