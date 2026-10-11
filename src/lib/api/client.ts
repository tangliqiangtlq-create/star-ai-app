import axios from 'axios'

const client = axios.create({
  baseURL: typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_API_BASE_URL || '/jeecg-boot')
    : (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/jeecg-boot'),
  timeout: 15000
})

client.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('X-Access-Token')
    if (token) {
      config.headers['X-Access-Token'] = token
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
})

client.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('X-Access-Token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default client
