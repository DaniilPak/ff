<script setup lang="ts">
import { ref, computed } from 'vue'
import type { CSSProperties } from 'vue'
import ChatList from '@/features/chatList/ui/ChatList.vue'

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
</script>

<template>
  <section>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="/roomlist">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    <a-flex>
      <div :style="{ ...baseStyle }">
        <ChatList />
      </div>
      <div :style="{ ...secondStyle }"></div>
    </a-flex>
  </section>
</template>
