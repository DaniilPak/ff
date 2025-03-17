<script setup lang="ts">
import { ref } from 'vue'
import { useChatStore } from '@/entities/chat'

const chatStore = useChatStore()
const message = ref('')

const send = () => {
  if (!message.value.trim()) return
  chatStore.sendMessage(message.value)
  message.value = ''
}
</script>

<template>
  <div class="chat-input">
    <input v-model="message" @keyup.enter="send" placeholder="Type a message..." />
    <button @click="send">Send</button>
  </div>
</template>

<style scoped>
.chat-input {
  display: flex;
  gap: 8px;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px;
}
</style>
