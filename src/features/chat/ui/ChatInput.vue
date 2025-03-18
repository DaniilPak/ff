<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useChatStore } from '@/entities/chat'

onMounted(() => {
  console.log('Component mounted! Setting up event listeners...')
  send('Tell me short very surprsing and impressive fact about human history')
})

const chatStore = useChatStore()
const message = ref('')

const send: {
  (msg: string): Promise<void>
  (event: Event): Promise<void>
} = async (arg: string | Event) => {
  let msg: string

  if (arg instanceof Event) {
    msg = message.value.trim()
  } else {
    msg = arg.trim()
  }

  if (!msg) return

  try {
    await chatStore.sendMessage(msg) // Ensure fetch completes
    message.value = ''
  } catch (error) {
    console.error('Failed to send message:', error)
  }
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
