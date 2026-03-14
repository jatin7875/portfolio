export default function Footer() {
  return (
    <footer style={{
      borderTop:'1px solid var(--border)',
      padding:'28px 48px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      flexWrap:'wrap', gap:12
    }}>
      <span style={{
        fontFamily:"'Orbitron',sans-serif", fontSize:'0.9rem',
        fontWeight:900, color:'var(--orange)', letterSpacing:'0.2em'
      }}>&lt;Jatin/&gt;</span>
      <span style={{ fontSize:'0.72rem', color:'var(--muted2)', letterSpacing:'0.1em' }}>
        © 2026 — Built with @jatin
      </span>
      <div style={{ display:'flex', gap:20 }}>
        {['About','Projects','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontSize:'0.72rem', color:'var(--muted2)',
            letterSpacing:'0.1em', transition:'color 0.2s'
          }}
          onMouseEnter={e=>e.target.style.color='var(--orange)'}
          onMouseLeave={e=>e.target.style.color='var(--muted2)'}>{l}</a>
        ))}
      </div>
      <style>{`
        @media(max-width:640px){
          footer{padding:20px 14px;justify-content:center;text-align:center;}
        }
      `}</style>
    </footer>
  )
}
