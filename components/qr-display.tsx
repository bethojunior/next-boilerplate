"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface QRDisplayProps {
  onBack: () => void
}

export default function QRDisplay({ onBack }: QRDisplayProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">ETUFOR</h1>
            <p className="text-sm text-gray-600">TRANSPORTE URBANO DE FORTALEZA</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">
          Sistema de fiscalização<br />
          Não invasiva
        </h2>
      </div>

      {/* QR Code */}
      <div className="w-full max-w-md mb-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center">
          <div className="w-64 h-64 bg-black rounded-lg flex items-center justify-center">
            {/* QR Code simulado */}
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }, (_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 ${
                    Math.random() > 0.5 ? 'bg-white' : 'bg-black'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Leitura */}
      <Button 
        className="w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
        onClick={onBack}
      >
        LEIA O QRCOD
      </Button>

      {/* Barra de navegação */}
      <div className="w-full h-1 bg-white mt-4"></div>
    </div>
  )
}
