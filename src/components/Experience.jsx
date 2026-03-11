import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="sec-title">Where I've Worked</h2>
        <div className="sec-line"/>

        <div style={{ position:'relative', paddingLeft:28 }}>
          <div style={{
            position:'absolute', left:0, top:0, bottom:0, width:1,
            background:'linear-gradient(to bottom,var(--orange),transparent)'
          }}/>
          {experience.map((e, i) => (
            <div key={i} style={{ position:'relative', paddingLeft:28, paddingBottom:36 }}>
              <div style={{
                position:'absolute', left:-23, top:6,
                width:10, height:10, borderRadius:'50%',
                background:'var(--orange)',
                boxShadow:'0 0 12px var(--orange-glow)'
              }}/>
              <div style={{
                fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem',
                color:'var(--orange)', letterSpacing:'0.2em', marginBottom:6,
                textTransform:'uppercase'
              }}>{e.date}</div>
              <div style={{ fontSize:'1.05rem', fontWeight:700, marginBottom:4 }}>{e.role}</div>
              <div style={{ fontSize:'0.85rem', color:'var(--muted)', marginBottom:10 }}>{e.company}</div>
              <p style={{ fontSize:'0.82rem', color:'var(--muted)', lineHeight:1.8 }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
