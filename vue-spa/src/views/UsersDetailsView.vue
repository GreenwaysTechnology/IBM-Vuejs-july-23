<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

</script>
<template>
    <div>
        <h1>User Details Page</h1>
        <h2>Id : {{ route.params.id }}</h2>
        <h2>Id:{{$route.params.id  }}</h2>
    </div>
</template>
  
<style></style>
  