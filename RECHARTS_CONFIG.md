# Configuración de Recharts para Glassmorphism Design

## Instalación

```bash
pnpm add recharts
```

## Componente de Ejemplo

```tsx
'use client'

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { time: '00:00', price: 43200 },
  { time: '04:00', price: 43450 },
  { time: '08:00', price: 43100 },
  { time: '12:00', price: 43800 },
  { time: '16:00', price: 43567 },
  { time: '20:00', price: 43900 },
  { time: '24:00', price: 44100 },
]

export function PriceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        {/* Grid sin líneas verticales */}
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="hsl(var(--border))"
          opacity={0.3}
        />

        {/* Ejes */}
        <XAxis
          dataKey="time"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.75rem',
            backdropFilter: 'blur(12px)',
          }}
          labelStyle={{
            color: 'hsl(var(--foreground))',
            fontWeight: 600,
          }}
          itemStyle={{
            color: 'hsl(var(--primary))',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Area Chart */}
        <Area
          type="monotone"
          dataKey="price"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fill="url(#priceGradient)"
          dot={false}
          activeDot={{
            r: 6,
            fill: 'hsl(var(--primary))',
            stroke: 'hsl(var(--card))',
            strokeWidth: 3,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
```

## Configuración Clave

### 1. **Stroke (Línea principal)**
```tsx
stroke="hsl(var(--primary))"  // #6366F1 - Indigo
strokeWidth={2}
```

### 2. **Fill (Degradado)**
```tsx
// Definir el degradado
<defs>
  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
  </linearGradient>
</defs>

// Aplicarlo
fill="url(#priceGradient)"
```

### 3. **Grid (Sin líneas verticales)**
```tsx
<CartesianGrid
  strokeDasharray="3 3"
  vertical={false}           // ⚠️ Importante: desactiva líneas verticales
  stroke="hsl(var(--border))"
  opacity={0.3}
/>
```

### 4. **Dots (Solo en hover)**
```tsx
<Area
  dot={false}                 // ⚠️ Desactiva puntos por defecto
  activeDot={{               // ✅ Activa solo en hover
    r: 6,
    fill: 'hsl(var(--primary))',
    stroke: 'hsl(var(--card))',
    strokeWidth: 3,
  }}
/>
```

### 5. **Tooltip (Glassmorphism)**
```tsx
<Tooltip
  contentStyle={{
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '0.75rem',
    backdropFilter: 'blur(12px)',  // ✨ Efecto glassmorphism
  }}
  labelStyle={{
    color: 'hsl(var(--foreground))',
    fontWeight: 600,
  }}
  itemStyle={{
    color: 'hsl(var(--primary))',
    fontFamily: 'JetBrains Mono, monospace',  // 🔢 Fuente monospace
  }}
/>
```

## Colores Disponibles (Semantic Tokens)

| Token | Color | Uso |
|-------|-------|-----|
| `hsl(var(--primary))` | #6366F1 (Indigo) | Líneas principales, acciones |
| `hsl(var(--success))` | Verde | Valores positivos |
| `hsl(var(--error))` | Rojo | Valores negativos |
| `hsl(var(--warning))` | Naranja | Advertencias |
| `hsl(var(--muted-foreground))` | Gris | Ejes, texto secundario |
| `hsl(var(--border))` | #E2E8F0 | Grid, bordes |
| `hsl(var(--card))` | Blanco | Fondos de tooltip |

## Variantes de Gráficas

### Line Chart (Simple)
```tsx
<Line
  type="monotone"
  dataKey="price"
  stroke="hsl(var(--primary))"
  strokeWidth={2}
  dot={false}
  activeDot={{ r: 6 }}
/>
```

### Bar Chart (Volumen)
```tsx
<Bar
  dataKey="volume"
  fill="hsl(var(--primary))"
  opacity={0.8}
  radius={[8, 8, 0, 0]}
/>
```

### Multiple Lines (Comparación)
```tsx
<Area
  type="monotone"
  dataKey="bitcoin"
  stroke="hsl(var(--chart-1))"
  fill="url(#gradientBTC)"
  dot={false}
/>
<Area
  type="monotone"
  dataKey="ethereum"
  stroke="hsl(var(--chart-2))"
  fill="url(#gradientETH)"
  dot={false}
/>
```

## Responsive Design

```tsx
// Desktop
<ResponsiveContainer width="100%" height={400}>

// Mobile
<ResponsiveContainer width="100%" height={250}>

// Auto (recomendado)
<div className="h-64 w-full md:h-96">
  <ResponsiveContainer width="100%" height="100%">
```

## Tips de Performance

1. **Memoize data**: Usa `useMemo` para datos que no cambian frecuentemente
2. **Limit data points**: Muestra máximo 50-100 puntos en móvil
3. **Debounce tooltips**: Si tienes muchos datos, debounce el tooltip
4. **Use animationDuration**: Ajusta a 300ms para mejor UX

```tsx
<Area
  animationDuration={300}
  isAnimationActive={true}
/>
```

---

**Para usar en tu dashboard:**

1. Instala recharts: `pnpm add recharts`
2. Copia el componente `PriceChart`
3. Ajusta los datos según tu API
4. Personaliza colores usando los tokens semánticos
