<script setup>
import Layout from './components/slots/Layout.vue'
import { ref } from 'vue';
const main =ref('main')

</script>
<template>
    <h1>Vue Application</h1>
    <Layout>
        <!-- <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:main>
            <p>Body</p>
        </template>
        <template v-slot:footer>
            <h3>Footer</h3>
        </template> -->
        <!-- <template #default>
            <h1>Header</h1>
        </template>
        <template #main>
            <p>Body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template> -->
        <template #default>
            <h1>Header</h1>
        </template>
        <template v-slot:[main]>
            <p>Body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>