export default function GameSelector({ sets, active, onChange }){
  return (
    <nav className="game-selector"><div className="tabs">{sets.map(s=>(<button key={s.id} className={s.id===active?'tab active':'tab'} onClick={()=>onChange(s.id)}>{s.title}</button>))}</div>
    <style jsx>{`.tabs{display:flex;gap:8px;overflow:auto;padding:8px 0}.tab{background:linear-gradient(180deg,#0f172a,#071026);color:#fff;border:1px solid rgba(255,255,255,0.04);padding:10px 14px;border-radius:10px}`}</style></nav>
  )
}
