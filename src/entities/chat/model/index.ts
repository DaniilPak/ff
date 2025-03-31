import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sendMessageToOpenAI } from '@/entities/chat/api'

type ApiError = {
  message: string
  response?: {
    status: number
    data: unknown
  }
}

export const useChatStore = defineStore('chat', () => {
  const messages = ref<{ id: number; text: string; sender: 'user' | 'bot' }[]>([])
  let idCounter = 0

  const sendMessage = async (text: string) => {
    messages.value.push({ id: idCounter++, text, sender: 'user' })
    await getAIReply(text)
  }

  const getAIReply = async (text: string) => {
    try {
      const response = await sendMessageToOpenAI(text)
      if (response && typeof response === 'string') {
        messages.value.push({ id: idCounter++, text: response, sender: 'bot' })
      } else {
        messages.value.push({ id: idCounter++, text: 'Unexpected response format.', sender: 'bot' })
      }
    } catch (error) {
      const err = error as ApiError
      console.error('OpenAI API error:', err.message)

      let errorMessage = 'Error fetching response. Please try again.'
      if (err.response?.status === 429) {
        errorMessage = 'Rate limit exceeded. Please wait before trying again.'
      } else if (err.response?.status === 500) {
        errorMessage = 'Server error. Try again later.'
      }

      messages.value.push({ id: idCounter++, text: errorMessage, sender: 'bot' })
    }
  }

  return { messages, sendMessage }
})
