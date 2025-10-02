"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface QRScannerProps {
  onScan: (data: string) => void
  onBack: () => void
}

export default function QRScanner({ onScan, onBack }: QRScannerProps) {
  const [plate, setPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [hasScanned, setHasScanned] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleManualSubmit = () => {
    if (plate.trim()) {
      onScan(plate.trim())
    }
  }

  const startCamera = async () => {
    try {
      setError(null)
      setIsScanning(true)
      setHasScanned(false)

      // Verificar se getUserMedia está disponível
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Câmera não suportada neste dispositivo")
      }

      // Verificar se está em HTTPS (necessário para câmera em mobile)
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        throw new Error("HTTPS necessário para acessar a câmera")
      }

      let stream: MediaStream

      try {
        // Tentar câmera traseira primeiro
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment'
          } 
        })
      } catch (err) {
        console.log("Câmera traseira não encontrada, tentando câmera frontal...")
        try {
          // Fallback para câmera frontal
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              facingMode: 'user'
            } 
          })
        } catch (err2) {
          console.log("Câmera frontal não encontrada, tentando qualquer câmera...")
          // Fallback para qualquer câmera disponível
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: true
          })
        }
      }

      const videoElement = videoRef.current
      if (!videoElement) return

      videoElement.srcObject = stream
      videoElement.play()

      // Simular detecção após 3 segundos para teste
      setTimeout(() => {
        if (!hasScanned) {
          setHasScanned(true)
          console.log("QR Code simulado detectado")
          
          // Aguarda 1 segundo e envia para próxima tela
          setTimeout(() => {
            onScan("HXY-1234")
          }, 1000)
        }
      }, 3000)

    } catch (err) {
      console.error("Erro ao iniciar câmera:", err)
      
      let errorMessage = "Câmera não disponível. Use a entrada manual de placa."
      
      if (err instanceof Error) {
        if (err.message.includes("HTTPS")) {
          errorMessage = "HTTPS necessário para acessar a câmera. Use a entrada manual de placa."
        } else if (err.message.includes("not found")) {
          errorMessage = "Câmera não encontrada. Use a entrada manual de placa."
        } else if (err.message.includes("Permission denied")) {
          errorMessage = "Permissão negada. Use a entrada manual de placa."
        }
      }
      
      setError(errorMessage)
      setIsScanning(false)
    }
  }

  const stopCamera = () => {
    // Parar o stream da câmera
    const videoElement = videoRef.current
    if (videoElement && videoElement.srcObject) {
      const stream = videoElement.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoElement.srcObject = null
    }
    
    setIsScanning(false)
  }

  useEffect(() => {
    return () => {
      // Limpar stream da câmera
      const videoElement = videoRef.current
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream
        stream.getTracks().forEach(track => track.stop())
        videoElement.srcObject = null
      }
    }
  }, [])

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

      {/* Área da Câmera */}
      <Card className="w-full max-w-md mb-6">
        <CardContent className="p-6">
          <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
            {isScanning ? (
              <div className="w-full h-full relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                />
                {hasScanned && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-75 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-2"></div>
                      <p className="text-lg font-semibold">QR Code Detectado!</p>
                      <p className="text-sm">Processando...</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Câmera desativada</p>
              </div>
            )}
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
              <p className="text-red-600 text-xs mt-1">
                💡 Dica: Use a entrada manual de placa abaixo
              </p>
            </div>
          )}
          
          <p className="text-center text-gray-600 mb-4">
            {isScanning ? "Câmera ativa - Aponte para o QR Code" : "Aponte a câmera para o QR Code do veículo"}
          </p>
          <div className="space-y-2">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              onClick={startCamera}
              disabled={isScanning}
            >
              {isScanning ? "Lendo QR Code..." : "Ativar Câmera"}
            </Button>
            {isScanning && (
              <Button 
                variant="outline"
                className="w-full"
                onClick={stopCamera}
              >
                Parar Câmera
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Separador */}
      <div className="w-full max-w-md mb-6">
        <p className="text-center text-gray-600">Ou</p>
      </div>

      {/* Entrada Manual */}
      <Card className="w-full max-w-md mb-6">
        <CardContent className="p-6">
          <p className="text-center text-gray-600 mb-4">
            Digite a placa do veículo
          </p>
          <div className="space-y-4">
            <Input
              placeholder="HXY-1234"
              value={plate}
              onChange={(e) => setPlate(e.target.value.toUpperCase())}
              className="text-center text-lg"
            />
            <Button 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              onClick={handleManualSubmit}
              disabled={!plate.trim()}
            >
              BUSCA
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Botão Voltar */}
      <Button 
        variant="outline" 
        onClick={onBack}
        className="w-full max-w-md"
      >
        Voltar
      </Button>
    </div>
  )
}
