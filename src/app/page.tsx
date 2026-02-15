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

        {/* Tarjeta grande para gráfica */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="mb-6 text-xl font-bold text-foreground">Price Chart</h2>
          <div className="flex h-64 items-center justify-center rounded-lg bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Instalar <code className="rounded bg-primary/10 px-2 py-1 font-mono text-xs">recharts</code> para ver gráficas
            </p>
          </div>
        </div>

        {/* Info de diseño */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">Glassmorphism Design System</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Fondo:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">#F8FAFC</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tarjetas:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">bg-card/80 backdrop-blur-lg</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Borde:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">#E2E8F0</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tipografía títulos:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">Inter Bold</code>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tipografía precios:</span>
              <code className="rounded bg-muted/50 px-2 py-1 font-mono text-xs">JetBrains Mono</code>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
