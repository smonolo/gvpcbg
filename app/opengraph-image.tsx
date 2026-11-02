import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.shortName} — ${site.aka}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
        background:
          'linear-gradient(135deg, #003366 0%, #0066cc 55%, #004d99 100%)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#bfdfff',
        }}
      >
        {site.shortName}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            lineHeight: 1.3,
            color: 'rgba(255,255,255,0.92)',
            maxWidth: 920,
          }}
        >
          {site.aka}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,0.82)',
            maxWidth: 920,
          }}
        >
          Protezione Civile · Busto Garolfo · dal {site.foundedYear}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 22,
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        <span>
          {site.address.city} ({site.address.province})
        </span>
        <span
          style={{
            display: 'flex',
            padding: '10px 18px',
            borderRadius: 4,
            background: '#c8102e',
            color: '#ffffff',
            fontWeight: 700,
          }}
        >
          Volontariato
        </span>
      </div>
    </div>,
    size
  )
}
