<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
    <div>
        <h1 style="text-align: center;">Vue Router App</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink> | 
            <RouterLink to="/about">About</RouterLink> | 
            <RouterLink to="review">Review</RouterLink> |
            <RouterLink to="users">Users</RouterLink> 

        </nav>
        <hr>
        <RouterView />
    </div>
</template>