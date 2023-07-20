<!-- <script>
import ProductMaster from './components/products/ProductMaster.vue'

export default {
    components: { ProductMaster }
}
</script> -->
<!-- Props with composition api with setup function -->
<!-- <script>
import ProductMaster from './components/products/ProductMaster.vue'

export default {
    components: { ProductMaster },
    setup() {

    }
}
</script> -->

<!-- Composition api with setup attribute -->
<script setup>
import ProductMaster from './components/products/ProductMaster.vue'
</script>
<template>
    <div>
        <h1>App</h1>
        <ProductMaster></ProductMaster>
    </div>
</template>