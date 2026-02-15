'use client'

import { CryptoChart } from '@/components/blocks/main-chart'

// Mock data - replace with real API data
const mockBitcoinData = [
  { time: '00:00', price: 43200 },
  { time: '02:00', price: 43150 },
  { time: '04:00', price: 43450 },
  { time: '06:00', price: 43380 },
  { time: '08:00', price: 43100 },
  { time: '10:00', price: 43250 },
  { time: '12:00', price: 43800 },
  { time: '14:00', price: 43650 },
  { time: '16:00', price: 43567 },
  { time: '18:00', price: 43720 },
  { time: '20:00', price: 43900 },
  { time: '22:00', price: 44050 },
  { time: '24:00', price: 44100 },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Crypto Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor your portfolio with glassmorphism design
          </p>
        </div>

        {/* Grid de tarjetas glassmorphism */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta 1 - Bitcoin */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bitcoin</p>
                <p className="price-text mt-1 text-2xl font-bold text-foreground">
                  $43,567.89
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">₿</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm font-medium text-success">+2.5%</span>
              <span className="text-xs text-muted-foreground">24h</span>
            </div>
          </div>

          {/* Tarjeta 2 - Ethereum */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ethereum</p>
                <p className="price-text mt-1 text-2xl font-bold text-foreground">
                  $2,234.56
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">Ξ</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm font-medium text-success">+1.8%</span>
              <span className="text-xs text-muted-foreground">24h</span>
            </div>
          </div>

          {/* Tarjeta 3 - Cardano */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cardano</p>
                <p className="price-text mt-1 text-2xl font-bold text-foreground">
                  $0.456789
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl">₳</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm font-medium text-error">-0.5%</span>
              <span className="text-xs text-muted-foreground">24h</span>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Bitcoin Price Chart</h2>
              <p className="text-sm text-muted-foreground">Last 24 hours</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-success">+2.08%</span>
              <span className="price-text text-2xl font-bold text-foreground">$44,100</span>
            </div>
          </div>

          <CryptoChart data={mockBitcoinData} title="Bitcoin - 24h" />
        </div>

        {/* Design System Info */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Glassmorphism Design System</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Background:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">#F8FAFC</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Cards:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">
                bg-card/80 backdrop-blur-lg
              </code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Border:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">#E2E8F0</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Typography (titles):</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">Inter Bold</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Typography (prices):</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">
                JetBrains Mono
              </code>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
