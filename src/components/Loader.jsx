import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true)
      setTimeout(onDone, 600)
    }, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--bg)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, transition: 'opacity 0.6s ease, visibility 0.6s',
      opacity: hidden ? 0 : 1, visibility: hidden ? 'hidden' : 'visible'
    }}>
      <div style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: '3rem', fontWeight: 900,
        color: 'var(--orange)', letterSpacing: '0.3em',
        animation: 'loaderPulse 1.5s ease-in-out infinite'
      }}>
        &lt;Jatin/&gt;
      </div>
      <div style={{
        width: 200, height: 2, background: 'var(--card2)', marginTop: 24, overflow: 'hidden', borderRadius: 2
      }}>
        <div style={{
          height: '100%', background: 'var(--orange)',
          animation: 'loaderFill 2s ease forwards'
        }} />
      </div>
      <div style={{
        marginTop: 12, fontSize: '0.75rem', letterSpacing: '0.3em',
        color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace",
        animation: 'blink 1s steps(1) infinite'
      }}>
        INITIALIZING...
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%,100% { text-shadow: 0 0 20px rgba(232,73,15,0.3); }
          50% { text-shadow: 0 0 50px #e8490f, 0 0 80px rgba(232,73,15,0.3); }
        }
        @keyframes loaderFill { 0% { width: 0%; } 100% { width: 100%; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </div>
  )
}
