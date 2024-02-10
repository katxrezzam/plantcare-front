import axios from "axios"

const CHAT_URL = "http://localhost:8000/api/chat"

export default async function getResponse(message: string) {
  const response = await axios.post(CHAT_URL, {
    message: message,
  })
  return response.data.response[0][1]
}
