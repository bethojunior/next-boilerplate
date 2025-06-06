import type React from "react"
import Image from "next/image"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-gradient-to-br from-[#6B46C1] via-[#3182CE] to-[#38B2AC] lg:block">
        <div className="flex h-full flex-col items-center justify-center p-8">
          <div className="relative mb-8 h-20 w-20">
            <Image src="/logo.png" alt="Pulse 704 Logo" fill className="object-contain" />
          </div>
          <h1 className="mb-6 text-center text-4xl font-bold text-white">
            <span className="text-[#F6AD55]">PULSE</span> <span className="text-white">704</span>
          </h1>
          <p className="max-w-md text-center text-lg text-white/80">
            Sistema avançado de monitoramento e gerenciamento de logs para suas aplicações
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-4 lg:w-1/2 lg:p-8">
        <div className="mb-8 flex items-center lg:hidden">
          <div className="relative mr-2 h-10 w-10">
            <Image src="/logo.png" alt="Pulse 704 Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#F6AD55]">PULSE</span> <span className="text-[#2C5282]">704</span>
          </h1>
        </div>
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
