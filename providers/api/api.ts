import axios from 'axios'

export const BASE_URL = ''

const apiProvider = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiProvider.interceptors.request.use((config) => {
  const token = localStorage.getItem('@token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

apiProvider.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiProvider
