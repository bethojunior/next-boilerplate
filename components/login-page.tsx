"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bus, MessageCircle } from "lucide-react"
import { useState } from "react"

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Login mocado - aceita qualquer usuário e senha
    if (email.trim() && password.trim()) {
      console.log("Login realizado com sucesso!", { email, password })
      onLogin()
    } else {
      alert("Por favor, preencha e-mail e senha")
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Bus className="w-10 h-10 text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-500">RΞTURN</h1>
          <p className="text-sm text-green-600 flex items-center justify-center gap-1">
            <span>eco</span>
          </p>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-2xl font-bold text-orange-500 text-center mb-8">
        Sistema de fiscalização<br />
        Não invasiva
      </h2>

      {/* Card de Login */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-black">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <div className="text-right">
            <a href="#" className="text-sm text-black hover:underline">
              Esqueci minha senha
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Suporte */}
      <div className="mt-8 w-full max-w-md">
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-center gap-2 text-green-600">
            <span className="text-sm">Para suporte, clique aqui!</span>
            <MessageCircle className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
