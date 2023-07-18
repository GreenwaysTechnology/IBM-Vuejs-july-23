<!-- options api pattern -->

<!-- <script>
import Message from './Message.vue';

export default {
    components: { Message }
}
</script>
<template>
    <Message></Message>
</template>
<style></style> -->

<!-- Composition api : using setup function -->

<!-- <script>
import Message from './Message.vue';

export default {
    components: { Message },
    setup() {

    }
}
</script>
<template>
    <Message></Message>
</template>
<style></style> -->

<!-- Composition api : using setup attribute -->
<script setup>
import Message from './Message.vue';
</script>
<template>
    <Message></Message>
</template>
<style></style>