<script setup>
import ChildSlot from './components/slots/ChildSlot.vue';

</script>
<template>
    <div>
        <h1>Parent</h1>
        <ChildSlot>
        </ChildSlot>
        <ChildSlot>
            <h1>Here i am passing</h1>
        </ChildSlot>
    </div>
</template>