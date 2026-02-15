'use client'

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface CryptoDataPoint {
  time: string
  price: number
  timestamp?: number
}

interface CryptoChartProps {
  data: CryptoDataPoint[]
  title?: string
  className?: string
}

export function CryptoChart(p: CryptoChartProps) {
  const { data, title = 'Price Evolution', className } = p

  return (
    <div className={className}>
      <div className="glass-card rounded-2xl p-6">
        <h3 className="mb-6 text-xl font-bold text-foreground">{title}</h3>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>

              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
                opacity={0.3}
              />

              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                style={{ fontFamily: 'var(--font-sans)' }}
              />

              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card) / 0.95)',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
                labelStyle={{
                  color: 'hsl(var(--foreground))',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
                itemStyle={{
                  color: 'hsl(var(--primary))',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                }}
                formatter={(value: number | undefined) =>
                  value !== undefined ? [`$${value.toLocaleString()}`, 'Price'] : ['N/A', 'Price']
                }
              />

              <Area
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#priceGradient)"
                fillOpacity={1}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: 'hsl(var(--primary))',
                  stroke: 'hsl(var(--card))',
                  strokeWidth: 3,
                }}
                animationDuration={300}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
