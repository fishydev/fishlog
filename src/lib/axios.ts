import axios from "axios"

import { API_URL, API_KEY } from "../config/index"

export const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
})

// axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response.data.message || error.message
    console.log(message)
    return Promise.reject(error)
  }
)
// })
