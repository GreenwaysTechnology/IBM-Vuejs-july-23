<script setup>
import ChildSlot from './components/slots/ChildSlot.vue';

</script>
<template>
    <div>
        <h1>Parent</h1>
        <ChildSlot>
                <!-- Pass dom element as prop -->
                <h1>DOM element as Prop</h1>
        </ChildSlot>
    </div>
</template>