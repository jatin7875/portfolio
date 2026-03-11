import { useEffect, useRef, useState } from 'react'
import { personal } from '../data'

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let c = 0
        const step = target / 40
        const timer = setInterval(() => {
          c += step
          if (c >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(c))
        }, 40)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} style={{
    fontFamily:"'Orbitron',sans-serif", fontSize:'1.8rem', fontWeight:900,
    color:'var(--orange)', display:'block'
  }}>{count}+</span>
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sec-title">Who I Am</h2>
        <div className="sec-line"/>

        <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:64, alignItems:'start' }}
          className="about-inner">
          {/* Photo */}
          <div style={{ position:'relative' }}>
            <div style={{
              background:'var(--card2)', border:'2px solid var(--orange)',
              aspectRatio:'1', display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'5rem', position:'relative', overflow:'hidden'
            }}>
             <img 
  src="/assets/img.jpeg" 
  alt="profile"
  style={{ 
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }}
/>
              {/* Corner decorations */}
              {[['top',0,'left',0],['top',0,'right',0],['bottom',0,'left',0],['bottom',0,'right',0]].map(([v,vv,h,hh],i)=>(
                <div key={i} style={{
                  position:'absolute', [v]:-6, [h]:-6,
                  width:20, height:20,
                  borderTop: i<2 ? '2px solid var(--orange)' : 'none',
                  borderBottom: i>=2 ? '2px solid var(--orange)' : 'none',
                  borderLeft: i%2===0 ? '2px solid var(--orange)' : 'none',
                  borderRight: i%2===1 ? '2px solid var(--orange)' : 'none',
                }}/>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ fontSize:'0.92rem', color:'var(--muted)', lineHeight:1.9, marginBottom:16 }}>{personal.bio1}</p>
            <p style={{ fontSize:'0.92rem', color:'var(--muted)', lineHeight:1.9, marginBottom:32 }}>{personal.bio2}</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }} className="stats-row">
              {personal.stats.map(s => (
                <div key={s.label} style={{
                  background:'var(--card)', border:'1px solid var(--border)',
                  padding:'18px 14px', textAlign:'center',
                  transition:'border-color 0.3s'
                }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='var(--orange)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                  <Counter target={s.value}/>
                  <span style={{ fontSize:'0.68rem', color:'var(--muted)', letterSpacing:'0.1em' }}>{s.label.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .about-inner{grid-template-columns:1fr!important;gap:28px!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
    </section>
  )
}
