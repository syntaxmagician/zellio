import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ZELLIO — Premium Software House & High-End Web Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Mesh Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-250px',
            right: '-250px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-250px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Top Tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              color: '#818cf8',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Elite Software House & High-End Web Agency
          </span>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 10,
            maxWidth: '850px',
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: '96px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0',
              lineHeight: 1,
            }}
          >
            ZELLIO
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Kami merancang website corporate premium, aplikasi SaaS kustom, dan sistem informasi enterprise (internal systems) berskala global.
          </p>
        </div>

        {/* Bottom Badges */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            zIndex: 10,
            marginTop: '40px',
          }}
        >
          {['Corporate Web', 'SaaS Applications', 'Enterprise Systems', 'UI/UX Design'].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  padding: '12px 28px',
                  color: '#e2e8f0',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>

        {/* ZELLIO Emblem on the Right */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '2px solid rgba(99, 102, 241, 0.2)',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(168,85,247,0.05) 100%)',
            zIndex: 5,
          }}
        >
          {/* Inner Glowing Geometry */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '24px',
              border: '6px solid #6366f1',
              transform: 'rotate(45deg)',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
