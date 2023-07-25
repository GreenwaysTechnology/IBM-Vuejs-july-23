<script setup>
import ScopeSlot from './components/slots/ScopeSlot.vue';

</script>
<template>
    <h1>Scoped Slots</h1>
    <ScopeSlot v-slot="slotprops">
        {{ slotprops.message }} {{ slotprops.firstName }}
        <!-- {{ JSON.stringify(slotprops) }} -->
    </ScopeSlot>
</template>
<style></style>