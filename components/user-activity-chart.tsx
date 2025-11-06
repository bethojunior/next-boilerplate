"use client"

import { useState, useEffect } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { apiService, UserActivity } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

export function UserActivityChart() {
  const { toast } = useToast()
  const [data, setData] = useState<UserActivity[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const response = await apiService.getUserActivity()
      const formattedData = response.map(item => ({
        name: new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'short' }),
        count: item.count,
      }))
      setData(formattedData)
    } catch (error) {
      toast({
        title: "Erro ao carregar dados",
        description: "Não foi possível carregar os dados de atividade.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <CardTitle className="text-lg">Atividade do Usuário</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] md:h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Carregando dados...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-muted-foreground" />
          <CardTitle className="text-lg">Atividade do Usuário</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] md:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={11}
                tickLine={false} 
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                padding={{ left: 5, right: 5 }}
                minTickGap={20}
                interval="preserveStartEnd"
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={11}
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                width={30}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                  padding: '8px'
                }}
                labelStyle={{ color: 'hsl(var(--foreground))', fontSize: '12px' }}
                itemStyle={{ color: 'hsl(var(--foreground))', fontSize: '12px' }}
                cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1 }}
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
                activeDot={{ r: 6 }} 
                dot={{ r: 3 }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
