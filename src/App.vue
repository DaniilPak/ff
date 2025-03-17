<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  Except router
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/roomlist">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
