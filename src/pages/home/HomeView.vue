<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">Welcome to Vue home</p>
      <button class="button is-light" @click="sayHello">Click Me</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const sayHello = () => alert('Hello from Bulma!')
</script>
