<template>
  <a-dropdown :trigger="['contextmenu']">
    <div>
      <slot></slot>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1" @click="$emit('remove', props.item)">Remove</a-menu-item>
        <a-menu-item key="2" @click="$emit('totop', props.item)">To the top</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts" setup>
const props = defineProps(['item'])
</script>
