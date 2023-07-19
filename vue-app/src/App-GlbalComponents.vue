<!-- Options api pattern -->
<!-- <script>
// import components
import Hello from './components/greeter/Hello.vue';

export default {
    //configurations
    //Component Registration
    components: {
        Hello
    }
}
</script>
<template>
    <Hello></Hello>
</template>
<style></style> -->

<!-- Composition api pattern : using setup function -->

<!-- <script>
// import components
import Hello from './components/greeter/Hello.vue';

export default {
    components: {
        Hello
    },
    setup(){

    }
}
</script>
<template>
    <Hello></Hello>
</template>
<style></style> -->

<!-- Composition api pattern : using setup attribute -->
<script setup>
import Hello from './components/greeter/Hello.vue';
</script>
<template>
    <StatusBar></StatusBar>
    <Hello></Hello>
</template>
<style></style>