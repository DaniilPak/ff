<script setup lang="ts">
import { useChatStore } from '@/entities/chat/model'
import ChatInput from '@/features/chat/ui/ChatInput.vue'

const chatStore = useChatStore()
</script>

<template>
  <div class="chat-box">
    <div class="messages">
      <div v-for="msg in chatStore.messages" :key="msg.id" :class="msg.sender">
        {{ msg.text }}
      </div>
    </div>
    <ChatInput />
  </div>
</template>

<style scoped>
.chat-box {
  border: 1px solid #ddd;
  padding: 10px;
  width: 300px;
}
.messages {
  height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.user {
  align-self: flex-end;
  background: #007bff;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
.bot {
  align-self: flex-start;
  background: #e0e0e0;
  padding: 5px;
  border-radius: 5px;
}
</style>
