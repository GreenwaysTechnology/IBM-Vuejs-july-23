
<script setup>

const onSubmit = event => {
    if (event) {
        event.preventDefault();
    }
}

</script>
<template>
    <div>
        <form action="http://www.google.com">
            <button @click="onSubmit">Submit</button>
        </form>
    </div>
</template>