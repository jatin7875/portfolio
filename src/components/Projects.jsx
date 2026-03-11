import { projects } from '../data'

function ProjectCard({ p }) {
  return (
    <div style={{
      background:'var(--card)', border:'1px solid var(--border)',
      padding:'24px 20px', display:'flex', flexDirection:'column',
      transition:'transform 0.3s,border-color 0.3s,box-shadow 0.3s',
      position:'relative', overflow:'hidden', height:'100%'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform='translateY(-6px)'
      e.currentTarget.style.borderColor='rgba(232,73,15,0.5)'
      e.currentTarget.style.boxShadow='0 0 30px var(--orange-glow),0 20px 40px rgba(0,0,0,0.3)'
      e.currentTarget.querySelector('.top-bar').style.transform='scaleX(1)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform=''
      e.currentTarget.style.borderColor=''
      e.currentTarget.style.boxShadow=''
      e.currentTarget.querySelector('.top-bar').style.transform='scaleX(0)'
    }}>
      <div className="top-bar" style={{
        position:'absolute',top:0,left:0,right:0,height:2,
        background:'var(--orange)',transform:'scaleX(0)',
        transition:'transform 0.4s ease'
      }}/>
      <div style={{
        fontFamily:"'JetBrains Mono',monospace",fontSize:'0.6rem',
        color:'var(--orange)',letterSpacing:'0.3em',marginBottom:10
      }}>{p.num}</div>
      <div style={{ fontSize:'1rem', fontWeight:700, marginBottom:8 }}>{p.title}</div>
      <p style={{ fontSize:'0.78rem', color:'var(--muted)', lineHeight:1.7, flex:1, marginBottom:16 }}>{p.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:16 }}>
        {p.tech.map(t => (
          <span key={t} style={{
            padding:'3px 10px', background:'rgba(232,73,15,0.1)',
            border:'1px solid rgba(232,73,15,0.25)',
            fontFamily:"'JetBrains Mono',monospace",fontSize:'0.62rem',
            color:'var(--orange)'
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display:'flex', gap:14 }}>
  <a 
    href={p.github}
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.1em', color:'var(--muted)', transition:'color 0.2s' }}
    onMouseEnter={e=>e.target.style.color='var(--orange)'}
    onMouseLeave={e=>e.target.style.color='var(--muted)'}
  >
    ⬡ GitHub
  </a>

  {p.live && (
    <a 
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.1em', color:'var(--muted)', transition:'color 0.2s' }}
      onMouseEnter={e=>e.target.style.color='var(--orange)'}
      onMouseLeave={e=>e.target.style.color='var(--muted)'}
    >
      ↗ Live
    </a>
  )}
</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sec-title">Things I've Built</h2>
        <div className="sec-line"/>
      </div>

      {/* Desktop grid */}
      <div className="container desktop-grid">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {projects.map(p => <ProjectCard key={p.num} p={p}/>)}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="mobile-carousel projects-carousel-wrap">
        {projects.map(p => (
          <div key={p.num} className="project-card-wrap">
            <ProjectCard p={p}/>
          </div>
        ))}
      </div>

      <style>{`
        .desktop-grid { display:block; }
        .mobile-carousel { display:none; }
        @media(max-width:900px){
          .desktop-grid div { grid-template-columns:repeat(2,1fr)!important; }
        }
        @media(max-width:640px){
          .desktop-grid { display:none; }
          .mobile-carousel { display:flex; }
        }
      `}</style>
    </section>
  )
}
