<script setup>
const appConfig = useAppConfig()

const { data, pending, error, refresh } = await useFetch('/api/hello')
</script>
<template>
    <h1>Greeter : Local api : Data fetching</h1>
    <div>
        {{data }} 
        {{ appConfig }}
    </div>
</template>