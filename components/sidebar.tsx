"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BarChart3, List, Settings, Menu, X, Users, UsersRound, Code } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: BarChart3,
    },
    {
      name: "Logs",
      path: "/logs",
      icon: List,
    },
    // {
    //   name: "Usuários",
    //   path: "/usuarios",
    //   icon: Users,
    // },
    {
      name: "Grupos",
      path: "/grupos",
      icon: UsersRound,
    },
    {
      name: "Integrações",
      path: "/code",
      icon: Code,
    },
    {
      name: "Configurações",
      path: "/configuracoes",
      icon: Settings,
    },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out dark:bg-gray-900 md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center p-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Pulse 704 Logo" width={40} height={40} />
              <span className="text-xl font-bold">
                <span className="text-[#F6AD55]">PULSE</span> <span className="text-[#2C5282]">704</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === route.path
                      ? "bg-gradient-to-r from-[#6B46C1] via-[#3182CE] to-[#38B2AC] text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
                  )}
                >
                  <route.icon className="mr-2 h-5 w-5" />
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
