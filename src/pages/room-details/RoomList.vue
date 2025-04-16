<script setup lang="ts">
import { useCounterStore } from '@/app/providers/store/counter'
import UsersList from '@/features/users/ui/UsersList.vue'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Fuck it</button>
  </div>
  <UsersList />
</template>
