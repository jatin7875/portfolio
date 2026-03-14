import { useTypewriter } from '../hooks/useTypewriter'
import { personal } from '../data'

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(personal.roles)

  return (
    <div id="hero" style={{
      minHeight:'100svh', position:'relative', overflow:'hidden',
      display:'flex', alignItems:'center', justifyContent:'center'
    }}>
      {/* Background */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(232,73,15,0.08) 0%, transparent 70%)'
      }}/>
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',
        backgroundSize:'60px 60px',
        animation:'gridShift 20s linear infinite'
      }}/>

      <div style={{ position:'relative', textAlign:'center', padding:'24px 20px', maxWidth:700 }}>
        <span style={{
          display:'inline-block', fontFamily:"'JetBrains Mono',monospace",
          fontSize:'0.7rem', letterSpacing:'0.3em', color:'var(--orange)',
          background:'rgba(232,73,15,0.1)', border:'1px solid rgba(232,73,15,0.3)',
          padding:'6px 16px', marginBottom:24
        }}>{personal.tagline}</span>

        <h1 style={{
          fontFamily:"'Orbitron',sans-serif",
          fontSize:'clamp(2.2rem,7vw,5.5rem)', fontWeight:900, lineHeight:1,
          letterSpacing:'0.05em', marginBottom:16,
          background:'linear-gradient(135deg,var(--white) 40%,var(--orange) 100%)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
        }}>{personal.name}</h1>

        <div style={{
          fontSize:'1.1rem', fontWeight:500, letterSpacing:'0.05em',
          marginBottom:32, height:36, display:'flex', alignItems:'center',
          justifyContent:'center', gap:4
        }}>
          <span style={{ color:'var(--muted)', fontWeight:400 }}>I'm a </span>
          <span style={{
            color:'var(--orange)', fontWeight:700,
            fontFamily:"'Orbitron',sans-serif", fontSize:'0.95rem'
          }}>{typed}</span>
          <span style={{
            color:'var(--orange)', animation:'cursorBlink 0.75s steps(1) infinite',
            fontSize:'1.2rem', fontWeight:300
          }}>|</span>
        </div>

        <p style={{
          fontSize:'1rem', color:'var(--muted)', maxWidth:520,
          margin:'0 auto 40px', lineHeight:1.8, fontWeight:400
        }}>{personal.bio1.split('.')[0] + '.'}</p>

        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}
            style={{ border:'none' }}>
            View My Work
          </button>
          <a href="https://drive.google.com/file/d/14gfg1ooWilpKA4PL93cu4-wYlFb-IC6D/view?usp=sharing" download className="btn-outline">
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:40, left:0, right:0,
        display:'flex', flexDirection:'column', alignItems:'center', gap:8
      }}>
        <div style={{
          width:1, height:60,
          background:'linear-gradient(to bottom,var(--orange),transparent)',
          animation:'scrollPulse 2s ease-in-out infinite'
        }}/>
        <span style={{
          fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem',
          letterSpacing:'0.3em', color:'var(--muted2)'
        }}>SCROLL</span>
      </div>

      <style>{`
        @keyframes gridShift { 0%{background-position:0 0} 100%{background-position:60px 60px} }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
      `}</style>
    </div>
  )
}
