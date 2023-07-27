<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter();
// console.log(router)

const gotoReview = () => {
    router.push({ path: '/review' })
}
</script>
<template>
    <h1>Movie View</h1>
    <ul>
        <li>
            <RouterLink to="/movies/action">
                <span>Action</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/drama">
                <span>Drama</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/horror">
                <span>Horror</span>
            </RouterLink>
        </li>
    </ul>
    <RouterView />
    <button @click="gotoReview">Review</button>
</template>
