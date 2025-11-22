'use client'

import type React from 'react'

import { authService } from '@/services/auth.service'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { IUser } from '@/@types/user'

type AuthContextType = {
  user: IUser | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  logout: () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const logout = () => {
    document.cookie =
      'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    setUser(null)
    router.push('/login')
  }

  async function login(email: string, password: string): Promise<boolean> {
    try {
      const response = await authService.login(email, password)
      if (response.accessToken) {
        localStorage.setItem('token', response.accessToken)
        document.cookie = `auth_token=${response.accessToken}; path=/; max-age=2592000`
        setUser(response.user)
        router.push('/dashboard')
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('auth_token='))
          ?.split('=')[1]
        if (!token) {
          setUser(null)
          setLoading(false)
          return
        }
        const userData = await authService.getMe()
        setUser(userData)
      } catch {
        setUser(null)
        document.cookie =
          'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
