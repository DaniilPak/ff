<script setup lang="ts">
import { useCounterStore } from '@/app/providers/store/counter'
import ChatBox from '@/widgets/chat/ChatBox.vue'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
  <ChatBox />
</template>
