<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CSSProperties } from 'vue'
import ChatList from '@/features/chatList/ui/ChatList.vue'
import UserOutlined from '@ant-design/icons-vue/lib/icons/UserOutlined'

const baseStyle: CSSProperties = {
  width: '25%',
  border: '1px solid #000',
  height: '98vh',
}
const secondStyle: CSSProperties = {
  width: '75%',
  height: '100px',
  border: '1px solid #000',
}
const floatButtonStyle: CSSProperties = {
  position: 'absolute',
  top: '20px', // Adjust this to place it where you want
  right: '20px', // Adjust this to place it where you want
}
</script>

<template>
  <section>
    <a-float-button type="primary" :style="floatButtonStyle">
      <template #icon>
        <UserOutlined />
      </template>
    </a-float-button>
    <a-flex>
      <div :style="{ ...baseStyle }">
        <ChatList />
      </div>
      <div :style="{ ...secondStyle }"></div>
    </a-flex>
  </section>
</template>
