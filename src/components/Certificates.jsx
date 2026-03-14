import { certificates } from '../data'

export default function Certificates() {
  return (
    <section id="certificates" className="section" style={{ background:'var(--bg2)' }}>
      <div className="container">
        <h2 className="sec-title">Certificates & Awards</h2>
        <div className="sec-line"/>

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <div key={i} className="cert-card" style={{ '--accent-color': c.color }}>
              <span className="cert-year">{c.year}</span>
              <span className="cert-icon">{c.icon}</span>
              <div className="cert-title">{c.title}</div>
              <span className="cert-platform">{c.platform}</span>
              <p className="cert-desc">{c.desc}</p>
              {/* Badge glow dot */}
              <div style={{
                position:'absolute', bottom:16, right:16,
                width:8, height:8, borderRadius:'50%',
                background: c.color,
                boxShadow:`0 0 10px ${c.color}`
              }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
