<script>
export default {
    props: ['title','product']
}
</script>
<template>
    <div>
        <h1>{{title}}</h1>
        <h2>Id {{product.id}}</h2>
        <h2>Name {{product.name}}</h2>
        <h2>Price {{product.price}}</h2>
        <h2>Qty {{product.qty}}</h2>
        <h2>Stock {{product.inStock ? "Available" : "Not Available"}}</h2>


    </div>
</template>