<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const USERS = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
const users = reactive(USERS)
</script>
<template>
    <h3>Users</h3>
    <ul>
        <li v-for="user of users" :key="user.id">
            <!-- <RouterLink :to="'/details/' + user.id"> -->
            <!-- <RouterLink :to="`/details/${user.id}`">
                <span>{{ user.name }}</span>
            </RouterLink> -->
            <!-- Using router name syntax -->
            <RouterLink :to="{name:'details',params:{id:user.id} }">
                <span>{{user.name}}</span>
            </RouterLink>
        </li>
    </ul>
</template>