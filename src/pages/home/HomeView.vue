<script setup lang="ts">
import { ref, computed } from 'vue'

const check = ref(0)
const minus = ref(0)
const percent = ref(0.1)
const checked = ref(false)

const pay = computed(() => {
  const discount = check.value * percent.value
  return checked.value ? check.value - discount - minus.value : check.value - discount
})
</script>

<template>
  <section>
    <a-space direction="vertical">
      <a-input v-model:value="check" placeholder="check" />
      <a-input v-model:value="minus" placeholder="minus" />
      Spend bonus {{ minus }}<a-switch v-model:checked="checked" /> discount: {{ percent }}%
      <br />
      summary: {{ pay }}
    </a-space>
  </section>
</template>
