"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function EsqueciSenhaPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Em um ambiente real, isso enviaria um email de recuperação
      // Simulando o envio para demonstração
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      toast({
        title: "Email enviado",
        description: "Verifique sua caixa de entrada para redefinir sua senha",
      })
    } catch (error) {
      toast({
        title: "Erro ao enviar email",
        description: "Ocorreu um erro ao tentar enviar o email de recuperação. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Recuperar Senha</CardTitle>
        <CardDescription>
          {isSubmitted
            ? "Enviamos um email com instruções para redefinir sua senha"
            : "Informe seu email para receber instruções de recuperação de senha"}
        </CardDescription>
      </CardHeader>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6B46C1] via-[#3182CE] to-[#38B2AC] hover:from-[#5a3ba3] hover:via-[#2a6db0] hover:to-[#2f9999]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                </>
              ) : (
                "Enviar Instruções"
              )}
            </Button>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/login" className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o login
              </Link>
            </Button>
          </CardFooter>
        </form>
      ) : (
        <CardContent className="space-y-6">
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              Enviamos um email para <strong>{email}</strong> com instruções para redefinir sua senha. Verifique sua
              caixa de entrada e siga as instruções no email.
            </p>
          </div>
          <Button variant="ghost" asChild className="w-full">
            <Link href="/login" className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o login
            </Link>
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
