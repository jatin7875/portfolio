import { skillCards, techStack } from '../data'
import { logos } from './TechLogoSVGs'

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background:'var(--bg2)' }}>
      <div className="container">
        <h2 className="sec-title">What I Work With</h2>
        <div className="sec-line"/>

        {/* Feature Cards */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
          gap:16, marginBottom:40
        }}>
          {skillCards.map((c, i) => (
            <div key={i} className="card" style={{
              padding:'24px 20px',
              border: c.active ? '1px solid var(--orange)' : '1px solid var(--border)',
              boxShadow: c.active ? '0 0 20px var(--orange-glow)' : 'none'
            }}>
              <div style={{
                width:44, height:44, background:'var(--card2)',
                border:'1px solid var(--border)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.2rem', marginBottom:16
              }}>{c.icon}</div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:8 }}>{c.title}</h3>
              <p style={{ fontSize:'0.8rem', color:'var(--muted)', lineHeight:1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack with SVG Logos */}
        <div className="tech-logo-grid">
          {techStack.map(t => {
            const Logo = logos[t.name]
            return (
              <div key={t.name} className="tech-logo-pill">
                {Logo
                  ? <Logo size={16}/>
                  : <span style={{ width:16, height:16, background:t.color, borderRadius:'50%', display:'inline-block' }}/>
                }
                <span style={{ color:'var(--white)', fontSize:'0.72rem' }}>{t.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
