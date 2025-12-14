'use client'
import { IUser } from '@/@types/user'
import apiProvider from '@/providers/api/api'
import { authService } from '@/services/auth.service'
import { createContext, useEffect, useState } from 'react'

interface AuthContextType {
  user: IUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<IUser>
  logout: () => void
  updateUser: (updatedUser: IUser) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  useEffect(() => {
    const storedUser = localStorage.getItem('@Madgic:EducaFlow:user')
    const token = localStorage.getItem('@Madgic:EducaFlow:token')

    if (storedUser && token) {
      setUser(JSON.parse(storedUser))
      apiProvider.defaults.headers.Authorization = `Bearer ${token}`
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<IUser> => {
    if (!email || !password) throw new Error('Email and password are required')

    try {
      const response = await authService.login(email, password)
      if (response.accessToken) {
        const { user, accessToken } = response
        localStorage.setItem('@Madgic:EducaFlow:token', accessToken)
        localStorage.setItem('@Madgic:EducaFlow:user', JSON.stringify(user))

        apiProvider.defaults.headers.Authorization = `Bearer ${accessToken}`
        setUser(user)
        return user
      }
      throw new Error('Invalid login response')
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error?.message || 'Login failed'
      throw new Error(errorMessage)
    }
  }

  const logout = () => {
    localStorage.removeItem('@Madgic:EducaFlow:token')
    localStorage.removeItem('@Madgic:EducaFlow:user')
    setUser(null)
  }

  const updateUser = (updatedUser: IUser) => {
    setUser(updatedUser)
    localStorage.setItem('@flow-user', JSON.stringify(updatedUser))
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
