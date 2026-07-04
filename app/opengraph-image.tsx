import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Om Janahithaya English Medium School | Best School in Bantwal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #080E1A 0%, #1A3FD4 50%, #3B5FEE 100%)',
          color: 'white',
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Om Janahithaya
        </div>
        <div style={{ fontSize: 32, marginTop: 12, opacity: 0.9 }}>
          English Medium School
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 24,
            background: '#FF5C00',
            padding: '12px 32px',
            borderRadius: 9999,
          }}
        >
          Best School in Bantwal | Nursery to SSLC
        </div>
        <div style={{ fontSize: 20, marginTop: 20, opacity: 0.8 }}>
          Arala, Bantwal, Dakshina Kannada — 574219
        </div>
      </div>
    ),
    { ...size }
  );
}
