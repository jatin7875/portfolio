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

// ── Easing & duration helpers ──────────────────────────────────────
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}
function calcDuration(distance) {
  const d = Math.abs(distance)
  if (d < 300)  return 500
  if (d < 800)  return 700
  if (d < 1600) return 900
  return 1050
}

export default function App() {
  const { theme, toggleTheme }            = useTheme()
  const { toasts, addToast, removeToast } = useToast()
  const [loaded, setLoaded]               = useState(false)
  const [showTop, setShowTop]             = useState(false)
  const overlayRef                        = useRef({})
  const scrollRAF                         = useRef(null)
  const isTouching                        = useRef(false)
  const scrollTimer                       = useRef(null)

  // ── Scroll progress bar + touch tracking ──────────────────────
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')

    const onTouchStart = () => { isTouching.current = true }
    const onTouchEnd   = () => {
      setTimeout(() => { isTouching.current = false }, 100)
    }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend',   onTouchEnd,   { passive: true })

    const onScroll = () => {
      const docH = document.body.scrollHeight - window.innerHeight
      if (bar) bar.style.width = Math.min((window.scrollY / docH) * 100, 100) + '%'
      setShowTop(window.scrollY > 400)

      // Pause background animations while scrolling
      document.body.classList.add('is-scrolling')
      clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend',   onTouchEnd)
    }
  }, [])

  // ── Scroll reveal ──────────────────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity    = '1'
          e.target.style.transform  = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => {
      el.style.opacity    = '0'
      el.style.transform  = 'translateY(28px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [loaded])

  // ── Smooth scroll ──────────────────────────────────────────────
  const smoothScrollTo = useCallback((targetY, forceDuration) => {
    // Don't hijack while user is touching (let native scroll work)
    if (isTouching.current) return

    if (scrollRAF.current) cancelAnimationFrame(scrollRAF.current)

    const startY   = window.scrollY
    const distance = targetY - startY
    const duration = forceDuration || calcDuration(distance)
    let startTime  = null

    const step = ts => {
      if (!startTime) startTime = ts
      const elapsed  = Math.min(ts - startTime, duration)
      const progress = elapsed / duration
      window.scrollTo(0, startY + distance * easeOutExpo(progress))
      if (elapsed < duration) {
        scrollRAF.current = requestAnimationFrame(step)
      } else {
        window.scrollTo(0, targetY)
        scrollRAF.current = null
      }
    }
    scrollRAF.current = requestAnimationFrame(step)
  }, [])

  // ── Nav / section scroll (simple, no complex effects) ─────────
  const scrollTo = useCallback((id) => {
    const el  = document.getElementById(id)
    if (!el) return

    // On mobile (touch), just use native scroll — fast and smooth
    if (isTouching.current) {
      const nav = document.querySelector('nav')
      const top = el.offsetTop - (nav?.offsetHeight || 60) - 16
      window.scrollTo({ top, behavior: 'smooth' })
      return
    }

    const nav = document.querySelector('nav')
    const top = el.offsetTop - (nav?.offsetHeight || 60) - 16

    // Desktop only: flash + scanline overlay effects
    const f = overlayRef.current.flash
    if (f) { f.style.opacity = '1'; setTimeout(() => f.style.opacity = '0', 200) }

    const s = overlayRef.current.scanline
    if (s) {
      s.style.transition = 'none'; s.style.left = '-100%'
      void s.offsetWidth
      s.style.transition = 'left 0.55s cubic-bezier(0.77,0,0.18,1)'
      s.style.left = '100%'
      setTimeout(() => { s.style.transition = 'none'; s.style.left = '-100%' }, 700)
    }

    smoothScrollTo(top)
  }, [smoothScrollTo])

  return (
    <>
      <Loader onDone={() => setLoaded(true)}/>
      <div id="scroll-progress"/>
      <NavOverlay triggerRef={overlayRef.current}/>

      <Navbar theme={theme} toggleTheme={toggleTheme} scrollTo={scrollTo}/>

      <main>
        <Hero        scrollTo={scrollTo}/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Certificates/>
        <Contact     addToast={addToast}/>
      </main>

      <Footer/>
      <Toast toasts={toasts} removeToast={removeToast}/>

      {/* Back to top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={() => smoothScrollTo(0)}
        title="Back to top"
      >↑</button>
    </>
  )
}