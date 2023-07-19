<!-- State Declaration : Using Options api -->
<script>
export default {
    data() {
        return {
            firstName: 'Subramanian',
            lastName: 'Murugan',
            address: {
                city: 'Coimbatore',
                state: 'Tamil Nadu'
            },
            points: 120,
            status: true
        }
    }
}
</script>
<template>
    <div>
        <h1>State Declaration and InterPolation Using Options Api</h1>
        <div>
            <h2>Name {{ firstName }} {{ lastName }}</h2>
            <h2>Address {{ address.city }} {{ address.state }}</h2>
            <h3>Points  {{ points }}</h3>
            <h3>Status {{ status ? "Available" : "Not Available" }}</h3>
        </div>
    </div>
</template>
<style></style>