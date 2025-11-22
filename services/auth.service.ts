import { IUser } from '@/@types/user'
import apiProvider from '@/providers/api/api'

export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiProvider.post('/auth/login', {
      email,
      password
    })
    return response.data
  },
  getMe: async (): Promise<IUser> => {
    const response = await apiProvider.get('/user/me')
    return response.data
  },
  createUser: async (userData: {
    name: string
    email: string
    password: string
  }) => {
    const response = await apiProvider.post('/auth/register', userData)
    return response.data
  }
}
