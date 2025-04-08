<script setup lang="ts">
import { useUsersStore } from '@/entities/user'

const usersStore = useUsersStore()
</script>

<template>
  <div v-if="usersStore.loading">Loading...</div>
  <div v-if="usersStore.error">Error: {{ usersStore.error.message }}</div>
  <ul v-if="usersStore.result">
    <li v-for="user in usersStore.result.users" :key="user.id">
      {{ user.name }} - {{ user.email }} - {{ user.age }}
    </li>
  </ul>
</template>
