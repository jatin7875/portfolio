import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme }    from './hooks/useTheme'
import { useToast }    from './hooks/useToast'
import Loader          from './components/Loader'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import Certificates    from './components/Certificates'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import Toast           from './components/Toast'

// ── Scroll flash/scanline overlay ─────────────────────────────────
function NavOverlay({ triggerRef }) {
  return (
    <>
      <div id="nav-flash" style={{
        position:'fixed', inset:0, zIndex:9990, pointerEvents:'none',
        background:'linear-gradient(135deg,rgba(232,73,15,0.07) 0%,transparent 60%)',
        opacity:0, transition:'opacity 0.15s'
      }} ref={el => triggerRef.flash = el}/>
      <div id="nav-scanline" style={{
        position:'fixed', top:0, left:'-100%', width:'100%', height:'100%',
        background:'linear-gradient(90deg,transparent 0%,rgba(232,73,15,0.06) 40%,rgba(232,73,15,0.18) 50%,rgba(232,73,15,0.06) 60%,transparent 100%)',
        zIndex:9989, pointerEvents:'none'
      }} ref={el => triggerRef.scanline = el}/>
    </>
  )
}

export default function App() {
  const { theme, toggleTheme }       = useTheme()
  const { toasts, addToast, removeToast } = useToast()
  const [loaded, setLoaded]          = useState(false)
  const [showTop, setShowTop]        = useState(false)
  const overlayRef                   = useRef({})

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const onScroll = () => {
      const docH = document.body.scrollHeight - window.innerHeight
      if (bar) bar.style.width = Math.min((window.scrollY / docH) * 100, 100) + '%'
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [loaded])

  // Animated scroll function shared across nav + hero button
  function easeInOutQuart(t) {
    return t < 0.5 ? 8*t*t*t*t : 1 - Math.pow(-2*t+2, 4)/2
  }
  const smoothScrollTo = useCallback((targetY, duration = 750) => {
    const startY = window.scrollY
    const dist   = targetY - startY
    let startTime = null
    const step = ts => {
      if (!startTime) startTime = ts
      const prog = Math.min((ts - startTime) / duration, 1)
      window.scrollTo(0, startY + dist * easeInOutQuart(prog))
      if (prog < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [])

  // Touch swipe navigation
  useEffect(() => {
    const sections = ['hero','about','skills','projects','experience','certificates','contact']
    let touchStartY = 0
    const onTouchStart = e => { touchStartY = e.touches[0].clientY }
    const onTouchEnd   = e => {
      const diff = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(diff) < 60) return
      const cur = sections.findIndex(s => {
        const el = document.getElementById(s)
        return el && window.scrollY < el.offsetTop + el.offsetHeight - 100
      })
      const next = diff > 0 ? Math.min(cur + 1, sections.length - 1) : Math.max(cur - 1, 0)
      if (next !== cur) scrollTo(sections[next])
    }
    document.addEventListener('touchstart', onTouchStart, { passive:true })
    document.addEventListener('touchend',   onTouchEnd,   { passive:true })
    return () => {
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend',   onTouchEnd)
    }
  }, [])

  

  

  return (
    <>
      <Loader onDone={() => setLoaded(true)}/>
      <div id="scroll-progress"/>
      <NavOverlay triggerRef={overlayRef.current}/>

      <Navbar theme={theme} toggleTheme={toggleTheme} scrollTo={scrollTo}/>

      <main>
        <Hero     scrollTo={scrollTo}/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Certificates/>
        <Contact  addToast={addToast}/>
      </main>

      <Footer/>
      <Toast toasts={toasts} removeToast={removeToast}/>

      {/* Back to top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => smoothScrollTo(0)}
        title="Back to top"
      >↑</button>

      <style>{`
        @keyframes sectionBurst {
          0%  { opacity:0.5; transform:scale(0.97) translateY(12px); }
          100%{ opacity:1;   transform:scale(1)    translateY(0); }
        }
      `}</style>
    </>
  )
}
