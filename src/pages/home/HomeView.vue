<script setup lang="ts">
import { ref, computed } from 'vue'
import { message } from 'ant-design-vue'
const [messageApi, contextHolder] = message.useMessage()

const check = ref(0)
const minus = ref(0)
const percent = ref(0.1)
const checked = ref(false)
const cashback = ref(0)

const pay = computed(() => {
  const discount = check.value * percent.value
  return checked.value ? check.value - discount - minus.value : check.value - discount
})

const handlePay = () => {
  cashback.value = pay.value * 0.1
  messageApi.info('Payment complete!')
}
</script>

<template>
  <context-holder />
  <section>
    <a-space direction="vertical">
      <a-input v-model:value="check" placeholder="check" />
      <a-input v-model:value="minus" placeholder="minus" />
      spend bonus {{ minus }}<a-switch v-model:checked="checked" /> discount: {{ percent }}%
      <br />
      summary: {{ pay }}

      <a-button @click="handlePay">Pay</a-button>
      <div v-if="cashback > 0">You gained cashback! {{ cashback }}</div>
    </a-space>
  </section>
</template>
  
