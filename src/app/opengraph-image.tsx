import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ZELLIO — Premium Software House & High-End Web Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Fetch custom fonts for premium typography (Plus Jakarta Sans)
  const [fontBold, fontMedium] = await Promise.all([
    fetch(
      new URL('https://unpkg.com/@fontsource/plus-jakarta-sans@5.0.19/files/plus-jakarta-sans-latin-800-normal.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL('https://unpkg.com/@fontsource/plus-jakarta-sans@5.0.19/files/plus-jakarta-sans-latin-500-normal.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer()),
  ]);

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
          background: 'linear-gradient(145deg, #020617 0%, #0a0f25 40%, #1e1b4b 100%)', // Deep obsidian to rich violet
          fontFamily: 'PlusJakartaSans, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Vibrant Aurora Background Meshes */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-100px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)', // Bright Sky Blue glow
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-300px',
            left: '-150px',
            width: '900px',
            height: '900px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 60%)', // Vibrant Purple glow
            filter: 'blur(50px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)', // Teal subtle glow
            transform: 'translateX(-50%)',
            filter: 'blur(60px)',
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
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: '#38bdf8', // Light sky blue
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              ELITE SOFTWARE HOUSE & SYSTEM AGENT
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 10,
            maxWidth: '850px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: '110px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              margin: '0',
              lineHeight: 1.1,
              textShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          >
            ZELLIO
          </h1>
          <p
            style={{
              color: '#cbd5e1', // Slate 300
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '800px',
              textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            Membangun website corporate premium, aplikasi SaaS kustom, dan ekosistem digital enterprise berskala global.
          </p>
        </div>

        {/* Bottom Badges - Glassmorphism Style */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            zIndex: 10,
            marginTop: '30px',
          }}
        >
          {[
            { label: 'Corporate Web', color: '#38bdf8' },
            { label: 'SaaS Development', color: '#c084fc' },
            { label: 'Enterprise Systems', color: '#2dd4bf' },
            { label: 'UI/UX Design', color: '#f472b6' },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(15, 23, 42, 0.4)', // Darker glass
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                borderRadius: '9999px',
                padding: '14px 32px',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: badge.color,
                  marginRight: '12px',
                  boxShadow: `0 0 12px ${badge.color}`,
                }}
              />
              <span
                style={{
                  color: '#f8fafc',
                  fontSize: '18px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* ZELLIO Emblem on the Right (Premium Glassphere/Hexagon) */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '320px',
            height: '320px',
            zIndex: 5,
          }}
        >
          {/* Outer Glass Ring */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          />
          {/* Inner Glowing Geometry */}
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
            }}
          >
            {/* Inner cutout for logo feel */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                backgroundColor: '#020617', // Match deepest background
                display: 'flex',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'PlusJakartaSans',
          data: fontBold,
          style: 'normal',
          weight: 800,
        },
        {
          name: 'PlusJakartaSans',
          data: fontMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  );
}
