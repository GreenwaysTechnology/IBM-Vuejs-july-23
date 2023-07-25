<script setup>
</script>
<template>
    <div>
        <!-- <slot name="header">
            <p>Fallback header</p>

        </slot> -->
        <slot>
            <p>Fallback header</p>
        </slot>
        <slot name="main">
            <p>Fallback main</p>

        </slot>
        <slot name="footer">
            <p>Fallback footer</p>
        </slot>
    </div>
</template>