export default function Toast({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast ${t.type}`} onClick={() => removeToast(t.id)}
          style={{ cursor:'pointer' }}>
          <span>{t.message}</span>
          <span style={{ marginLeft:'auto', opacity:0.5, fontSize:'1rem' }}>×</span>
        </div>
      ))}
    </div>
  )
}
