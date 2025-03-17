import axios from 'axios'

const API_URL = 'https://api.openai.com/v1/chat/completions'
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export const sendMessageToOpenAI = async (message: string) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-4o-mini',
        store: true,
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )
    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Error sending message to OpenAI:', error)
    return 'Error: Unable to fetch response.'
  }
}
