import { useState, useEffect } from 'react'

const links = ['About','Skills','Projects','Experience','Certificates','Contact']

export default function Navbar({ theme, toggleTheme, scrollTo }) {
  const [active, setActive]     = useState('')
  const [drawerOpen, setDrawer] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      let cur = ''
      links.forEach(l => {
        const el = document.getElementById(l.toLowerCase())
        if (el && scrollY >= el.offsetTop - 120) cur = l.toLowerCase()
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (id) => {
    setDrawer(false)
    scrollTo(id)
  }

  return (
    <>
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'14px 48px',
        background:'var(--nav-bg)',
        backdropFilter:'blur(20px)',
        borderBottom:'1px solid var(--border)',
        transition:'background 0.3s'
      }}>
        <a href="#hero" style={{
          fontFamily:"'Orbitron',sans-serif",fontSize:'1.1rem',fontWeight:900,
          color:'var(--orange)',letterSpacing:'0.2em'
        }}>&lt;Jatin/&gt;</a>

        {/* Desktop links */}
        <ul style={{display:'flex',gap:28,listStyle:'none',alignItems:'center'}} className="desktop-nav">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleLink(l.toLowerCase())} style={{
                background:'none',border:'none',
                color: active === l.toLowerCase() ? 'var(--orange)' : 'var(--muted)',
                fontFamily:"'Rajdhani',sans-serif",fontSize:'0.82rem',fontWeight:600,
                letterSpacing:'0.15em',textTransform:'uppercase',
                cursor:'pointer',padding:'4px 0',position:'relative',
                transition:'color 0.2s'
              }}>
                {l}
                {active === l.toLowerCase() && (
                  <span style={{
                    position:'absolute',bottom:-4,left:0,right:0,height:1,
                    background:'var(--orange)'
                  }}/>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          {/* Theme toggle */}
          <button onClick={toggleTheme} style={{
            width:40,height:40,background:'var(--card)',border:'1px solid var(--border)',
            display:'flex',alignItems:'center',justifyContent:'center',
            fontSize:'1.1rem',transition:'border-color 0.2s,transform 0.2s'
          }}
          onMouseEnter={e=>e.currentTarget.style.borderColor='var(--orange)'}
          onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}
          title="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setDrawer(o => !o)}
            className="hamburger-btn"
            style={{
              display:'none',flexDirection:'column',gap:5,
              width:36,height:36,background:'none',border:'none',
              padding:4,cursor:'pointer',alignItems:'center',justifyContent:'center'
            }}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block',height:2,borderRadius:2,
                background: drawerOpen ? 'var(--orange)' : 'var(--white)',
                width: i===1 ? (drawerOpen?24:18) : 24,
                transformOrigin:'center',
                transition:'transform 0.35s, opacity 0.25s, width 0.3s, background 0.2s',
                transform: drawerOpen
                  ? i===0 ? 'translateY(7px) rotate(45deg)'
                  : i===2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
                  : 'none',
                opacity: drawerOpen && i===1 ? 0 : 1
              }}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setDrawer(false)}
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:4}}>
          {links.map((l,i) => (
            <li key={l} style={{
              opacity: drawerOpen ? 1 : 0,
              transform: drawerOpen ? 'none' : 'translateX(24px)',
              transition:`opacity 0.35s ease ${i*0.06+0.08}s, transform 0.35s ease ${i*0.06+0.08}s`
            }}>
              <button onClick={() => handleLink(l.toLowerCase())} style={{
                display:'flex',alignItems:'center',gap:14,width:'100%',
                padding:'14px 16px',background:'none',
                border: active===l.toLowerCase() ? '1px solid rgba(232,73,15,0.3)' : '1px solid transparent',
                background: active===l.toLowerCase() ? 'rgba(232,73,15,0.06)' : 'none',
                color: active===l.toLowerCase() ? 'var(--orange)' : 'var(--muted)',
                fontFamily:"'Rajdhani',sans-serif",fontSize:'1rem',fontWeight:600,
                letterSpacing:'0.12em',textTransform:'uppercase',cursor:'pointer',
                transition:'color 0.2s,border-color 0.2s,background 0.2s'
              }}>
                <span style={{
                  fontFamily:"'JetBrains Mono',monospace",fontSize:'0.6rem',
                  color:'var(--orange)',opacity:0.6,minWidth:20
                }}>0{i+1}</span>
                {l}
              </button>
            </li>
          ))}
        </ul>
        <div style={{
          marginTop:'auto',display:'flex',gap:12,paddingTop:32,
          borderTop:'1px solid var(--border)'
        }}>
          <button onClick={toggleTheme} style={{
            flex:1,padding:'10px',background:'var(--card2)',border:'1px solid var(--border)',
            color:'var(--muted)',fontFamily:"'Rajdhani',sans-serif",fontSize:'0.8rem',
            fontWeight:600,letterSpacing:'0.1em',
          }}>
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .desktop-nav{display:none!important;}
          .hamburger-btn{display:flex!important;}
          nav{padding:12px 16px!important;}
        }
      `}</style>
    </>
  )
}
