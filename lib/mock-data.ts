// Dados mocados para teste do sistema de fiscalização

export const mockInspectionData = {
  driver: {
    name: "Lucas Silva",
    avatar: "L",
    vehicle: "Honda Civic-ABC-1234",
    trips: 1226,
    rating: 4.9,
    years: 2
  },
  passenger: {
    name: "Maria Santos",
    avatar: "M",
    vehicle: "Honda Civic-ABC-1234",
    trips: 856,
    rating: 4.7,
    years: 1
  },
  vehicle: {
    model: "WV - POLO",
    year: "2025/2025",
    plate: "HXY 1234",
    status: "VISTORIADO EM 2025",
    platform: "UBER",
    image: "/placeholder.jpg"
  },
  route: {
    pickup: {
      address: "R. Nunes Valente, 980 - Aldeota, Fortaleza - CE, 60125-035, Brasil",
      distance: "3.3 km",
      time: "12 min"
    },
    destination: {
      address: "R. Matos Vasconcelos, 213 - Bela Vista, Fortaleza - CE, 60426-105, Brasil",
      distance: "9.20 km",
      time: "25 min"
    }
  },
  inspection: {
    id: "INS-2025-001",
    date: "15/01/2025",
    time: "21:28",
    location: "Fortaleza - CE",
    status: "CONFORME",
    alerts: [
      {
        type: "success",
        message: "Veículo em conformidade. Nenhuma irregularidade detectada."
      }
    ]
  }
}

export const mockQRCodeData = {
  plate: "ABC-1234",
  inspectionId: "INS-2025-001",
  timestamp: new Date().toISOString()
}

export const mockReports = {
  inspection: {
    id: "INS-2025-001",
    date: "15/01/2025",
    time: "21:28",
    location: "Fortaleza - CE",
    agent: "Agente Fiscal",
    vehicle: "HXY 1234",
    driver: "Lucas Silva",
    passenger: "Maria Santos",
    status: "CONFORME",
    observations: "Fiscalização realizada com sucesso. Veículo em conformidade."
  }
}
