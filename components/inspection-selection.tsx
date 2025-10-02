"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, MessageCircle } from "lucide-react"

interface InspectionSelectionProps {
  onSelect: (type: 'native' | 'etufor' | 'prefeitura') => void
}

export default function InspectionSelection({ onSelect }: InspectionSelectionProps) {
  const handleSelect = (type: 'native' | 'etufor' | 'prefeitura') => {
    console.log(`Tipo de fiscalização selecionado: ${type}`)
    onSelect(type)
  }
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Logo R3TURN */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-500">R3TURN</h1>
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

      {/* Opções de Fiscalização */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* QR Code Nativo */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border border-gray-300" onClick={() => handleSelect('native')}>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">W</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">QrCod Nativo</h3>
          </CardContent>
        </Card>

        {/* ETUFOR */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border border-gray-300" onClick={() => handleSelect('etufor')}>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">QrCod Fiscalização Municipal</h3>
            <p className="text-xs text-gray-600">ETUFOR</p>
            <p className="text-xs text-gray-500">TRANSPORTE URBANO DE FORTALEZA</p>
          </CardContent>
        </Card>

        {/* Prefeitura */}
        <Card className="cursor-pointer hover:shadow-lg transition-shadow border border-gray-300" onClick={() => handleSelect('prefeitura')}>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">QrCod Sec. Transporte e Mobilidade</h3>
            <p className="text-xs text-gray-600">PREFEITURA DE FLORIANÓPOLIS</p>
          </CardContent>
        </Card>
      </div>

      {/* Texto de uso exclusivo */}
      <div className="w-full max-w-4xl text-center">
        <p className="text-sm text-gray-600 mb-4">
          Uso exclusivos aos conveniados acima.
        </p>
        
        {/* Suporte */}
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
