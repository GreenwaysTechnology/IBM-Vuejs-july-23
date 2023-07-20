<!-- <script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: {
        ProductDetails
    },
    data() {
        return {
            product: {
                id: 1,
                name: 'Phone',
                qty: 100,
                price: 1000,
                inStock: 'true'
            }
        }
    }
}
</script> -->

<!-- Props with composition api with setup function -->
<!-- <script>
import ProductDetails from './ProductDetails.vue'

export default {
    components: {
        ProductDetails
    },
    setup() {
        
        return {
            product: {
                id: 1,
                name: 'Phone',
                qty: 100,
                price: 1000,
                inStock: 'true'
            }
        }
    }
}
</script> -->

<!-- composition api with setup attribute -->
<script setup>
import ProductDetails from './ProductDetails.vue'
const product = {
    id: 1,
    name: 'Phone',
    qty: 100,
    price: 1000,
    inStock: 'true'
}

</script>
<template>
    <div>
        <h1>Product Master</h1>
        <!-- title and product  are prop : title is static prop product is dynamic prop -->
        <ProductDetails title="Product Page-1" :product="product" />
        <ProductDetails title="Product Page-2" :product="product" />
        <ProductDetails title="Product Page-3" :product="product" />
        <ProductDetails title="Product Page-4" :product="product" />
        <ProductDetails title="Product Page-5" :product="product" />

    </div>
</template>