'use client'

import type React from 'react'

import { Sidebar } from '@/components/sidebar'
import { useToast } from '@/components/ui/use-toast'
import { UserNav } from '@/components/user-nav'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { toast } = useToast()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: 'Acesso negado',
        description: 'Você precisa fazer login para acessar esta página',
        variant: 'destructive'
      })
      router.push('/login')
    }
  }, [user, isLoading, router, toast])

  if (isLoading || !user) return null

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b bg-background px-4">
          <UserNav />
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
