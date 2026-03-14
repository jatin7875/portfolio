import { useState } from 'react'
import { personal } from '../data'

// EmailJS config — replace with your own from emailjs.com (free)
const EMAILJS_SERVICE  = 'service_j76nck8'
const EMAILJS_TEMPLATE = 'template_emrsv6h'
const EMAILJS_KEY      = 'ahfa5LWX3GpN5o8P8'

export default function Contact({ addToast }) {
  const [form, setForm]       = useState({ name:'', email:'', subject:'', message:'' })
  const [sending, setSending] = useState(false)
  const [copied, setCopied]   = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      addToast('📋 Email copied to clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      addToast('Could not copy — try manually', 'error')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      addToast('Please fill in all required fields', 'error'); return
    }
    setSending(true)
    try {
      // EmailJS integration
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE,
          template_id: EMAILJS_TEMPLATE,
          user_id:     EMAILJS_KEY,
          template_params: { ...form, to_email: personal.email }
        })
      })
      if (res.ok) {
        addToast('✅ Message sent successfully! I\'ll reply soon.', 'success')
        setForm({ name:'', email:'', subject:'', message:'' })
      } else {
        throw new Error('Send failed')
      }
    } catch {
      // Fallback: open mail client
      const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name}\n\n${form.message}`)}`
      window.open(mailto)
      addToast('📧 Opening your mail client as fallback', 'info')
    } finally {
      setSending(false)
    }
  }

  const socialLinks = [
    { title:'GitHub', href:personal.github, svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
    { title:'LinkedIn', href:personal.linkedin, svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { title:'Instagram', href:personal.instagram, svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { title:'Email', href:`mailto:${personal.email}`, svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="sec-title">Get In Touch</h2>
        <div className="sec-line"/>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60 }} className="contact-grid-inner">
          {/* Left */}
          <div>
            <p style={{ fontSize:'0.9rem', color:'var(--muted)', lineHeight:1.9, marginBottom:24 }}>
              I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open.
            </p>

            {/* Copy email button */}
            <button onClick={copyEmail} style={{
              display:'flex', alignItems:'center', gap:10, marginBottom:28,
              padding:'10px 20px', background:'var(--card)', border:'1px solid var(--border)',
              color:'var(--muted)', fontFamily:"'JetBrains Mono',monospace",
              fontSize:'0.75rem', letterSpacing:'0.1em', cursor:'pointer',
              transition:'border-color 0.2s,color 0.2s'
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--orange)';e.currentTarget.style.color='var(--orange)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--muted)'}}>
              <span>{copied ? '✅' : '📋'}</span>
              <span>{copied ? 'Copied!' : personal.email}</span>
            </button>

            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {socialLinks.map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer"
                  title={s.title} style={{
                    width:44, height:44, background:'var(--card)',
                    border:'1px solid var(--border)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'var(--muted)', transition:'border-color 0.2s,color 0.2s,transform 0.2s,box-shadow 0.2s'
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--orange)';e.currentTarget.style.color='var(--orange)';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 8px 20px var(--orange-glow)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {[
              { name:'name',    label:'NAME',    type:'text',  placeholder:'Your name' },
              { name:'email',   label:'EMAIL',   type:'email', placeholder:'your@email.com' },
              { name:'subject', label:'SUBJECT', type:'text',  placeholder:'Project inquiry' },
            ].map(f => (
              <div key={f.name} style={{ display:'flex', flexDirection:'column', gap:5 }}>
                <label style={{ fontSize:'0.68rem', letterSpacing:'0.2em', color:'var(--muted)', fontWeight:600 }}>{f.label}</label>
                <input name={f.name} type={f.type} placeholder={f.placeholder}
                  value={form[f.name]} onChange={handleChange}
                  className="form-input" required={f.name!=='subject'}/>
              </div>
            ))}
            <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
              <label style={{ fontSize:'0.68rem', letterSpacing:'0.2em', color:'var(--muted)', fontWeight:600 }}>MESSAGE</label>
              <textarea name="message" placeholder="Tell me about your project..."
                value={form.message} onChange={handleChange}
                className="form-textarea" required/>
            </div>
            <button type="submit" className="btn-primary" style={{ border:'none', alignSelf:'flex-start' }}
              disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .contact-grid-inner{grid-template-columns:1fr!important;gap:32px!important;}
        }
      `}</style>
    </section>
  )
}
