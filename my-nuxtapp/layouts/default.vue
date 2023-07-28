<template>
    <div class="mypage">
      <nav>
         <NuxtLink to="/about">About</NuxtLink> | 
         <NuxtLink to="/services">Services</NuxtLink> |
         <NuxtLink to="/products">Products</NuxtLink> | 
         <NuxtLink to="/counter">Counter</NuxtLink> |
         <NuxtLink to="/todos">Todos</NuxtLink> |
         <NuxtLink to="/greeter">Greeter</NuxtLink>

      </nav>
      <!-- <NuxtPage /> -->
      <slot/>
    </div>
  </template>
  <style scoped>
  .mypage {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    padding: 10rem;
  }
  </style>
  