"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockInspectionData } from "@/lib/mock-data"
import { AlertTriangle, Car, Download, MapPin, Send } from "lucide-react"

interface InspectionResultProps {
  onNewInspection: () => void
  onBack: () => void
}

export default function InspectionResult({ onNewInspection, onBack }: InspectionResultProps) {
  const { driver, passenger, vehicle, route, inspection } = mockInspectionData
  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      {/* Header */}
      <div className="w-full mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">ETUFOR</h1>
            <p className="text-sm text-gray-600">TRANSPORTE URBANO DE FORTALEZA</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
          Sistema de fiscalização<br />
          Não invasiva
        </h2>
      </div>

      {/* Perfil do Motorista */}
      <Card className="w-full mb-4 bg-gray-800 text-white">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{driver.avatar}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{driver.name}</h3>
              <p className="text-sm text-gray-300">{driver.vehicle}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span>{driver.trips.toLocaleString()} Viagens</span>
                <span>{driver.rating}★ Avaliação</span>
                <span>{driver.years} Anos</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Perfil do Passageiro */}
      <Card className="w-full mb-4 bg-gray-800 text-white">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">{passenger.avatar}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{passenger.name}</h3>
              <p className="text-sm text-gray-300">{passenger.vehicle}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span>{passenger.trips.toLocaleString()} Viagens</span>
                <span>{passenger.rating}★ Avaliação</span>
                <span>{passenger.years} Anos</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mapa e Rota */}
      <Card className="w-full mb-4">
        <CardContent className="p-4">
          <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-4">
            <div className="text-center">
              <Car className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Mapa da Rota</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Pickup spot</span>
              <Button variant="outline" size="sm">Change</Button>
            </div>
            <div className="text-sm text-gray-600">
              <p>{route.pickup.address}</p>
              <p className="text-orange-500">{route.pickup.distance}, {route.pickup.time}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>{route.destination.address}</p>
              <p className="text-orange-500">{route.destination.distance}, {route.destination.time}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detalhes do Veículo */}
      <Card className="w-full mb-6">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <Car className="w-10 h-10 text-gray-400" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium">VEÍCULO: {vehicle.model}</p>
              <p className="text-sm text-gray-600">ANO: {vehicle.year}</p>
              <p className="text-sm text-gray-600">PLACA: {vehicle.plate}</p>
              <p className="text-sm text-green-600">STATUS: {vehicle.status}</p>
              <p className="text-sm text-gray-600">PLATAFORMA: {vehicle.platform}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alertas */}
      <Card className="w-full mb-6 border-yellow-200 bg-yellow-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <h3 className="font-semibold text-yellow-800">Alertas</h3>
          </div>
          {inspection.alerts.map((alert, index) => (
            <p key={index} className="text-sm text-yellow-700">
              {alert.message}
            </p>
          ))}
        </CardContent>
      </Card>

      {/* Ações */}
      <div className="space-y-3 mb-6">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => {
            alert(`Relatório gerado!\n\nID: ${inspection.id}\nData: ${inspection.date}\nHora: ${inspection.time}\nLocal: ${inspection.location}`)
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Gerar Relatório
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            alert("Notificação enviada com sucesso!")
          }}
        >
          <Send className="w-4 h-4 mr-2" />
          Enviar Notificação
        </Button>
      </div>

      {/* Botão Nova Consulta */}
      <Button 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
        onClick={onNewInspection}
      >
        NOVA CONSULTA
      </Button>
    </div>
  )
}
