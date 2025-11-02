import { ImageResponse } from 'next/og'
 
// Image metadata
export const alt = 'LaserSpecHub - Laser Equipment Specification Comparison Platform'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 120,
              marginRight: '20px',
            }}
          >
            ⚡
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            LaserSpecHub
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          Laser Equipment Specification Comparison Platform
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Compare technical specifications • Calculate power requirements • Make informed decisions
        </div>

        {/* Features badges */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: '20px',
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            50+ Equipment
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: '20px',
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            8 Tools
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '12px 24px',
              borderRadius: '20px',
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            Expert Guides
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

