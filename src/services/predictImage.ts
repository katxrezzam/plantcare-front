import axios from "axios"

const API_BASE_URL = "http://localhost:8000/api/predict"

export async function predicImage(image: File) {
  try {
    const response = await axios.post(
      API_BASE_URL,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
