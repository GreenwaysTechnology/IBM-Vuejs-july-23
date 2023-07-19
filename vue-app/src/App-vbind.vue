<script setup>
const imageUrl = "/src/assets/logo.svg"
const isEnabled = true
const isHidden = false
</script>
<template>
    <div>
        <h1>Bind Directives</h1>
        <div>
            <h1>Static Binding</h1>
            <img src="./assets/logo.svg" height="100" width="100" />
        </div>
        <div>
            <h1>Dynamic Binding with v-bind</h1>
            <img v-bind:src="imageUrl" height="100" width="100"/>
        </div>
        <div>
            <h1>Dynamic Binding with v-bind with short cut</h1>
            <img :src="imageUrl" height="100" width="100"/>
        </div>
        <div>
            <h1>Dynamic Binding with v-bind Button enabled</h1>
            <button :disabled="isEnabled">Click</button>
        </div>
        <div>
            <h1>Dynamic Binding with v-bind Article hidden</h1>
            <article :hidden="isHidden">
                <p>This is vue article</p>
            </article>
        </div>
    </div>
</template>
<style></style>