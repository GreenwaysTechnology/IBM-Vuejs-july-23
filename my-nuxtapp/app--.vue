<template>
  <!-- <div>
     <NuxtWelcome /> -->
    <!-- <Greeter/> -->
    <!-- Links -->
    <!-- <NuxtPage/>
  </div> -->
  <div class="mypage">
    <nav>
       <NuxtLink to="/about">About</NuxtLink> | 
       <NuxtLink to="/services">Services</NuxtLink> |
       <NuxtLink to="/products">Products</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
<style scoped>
.mypage {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>
