<!-- State Declaration : Using Compostion api-setup attribute -->
<script setup>
const firstName = 'Subramanian'
const lastName = 'Murugan'
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const points = 120
const status = true
</script>
<template>
    <div>
        <h1>State Declaration and InterPolation Using Options Api</h1>
        <div>
            <h2>Name {{ firstName }} {{ lastName }}</h2>
            <h2>Address {{ address.city }} {{ address.state }}</h2>
            <h3>Points {{ points }}</h3>
            <h3>Status {{ status ? "Available" : "Not Available" }}</h3>
        </div>
    </div>
</template>
<style></style>