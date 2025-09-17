import { useState, useEffect } from 'react'
export default function Leaderboard(){
  const [localScores,setLocal] = useState([])
  useEffect(()=>{ const h=JSON.parse(localStorage.getItem('dicearcade.history')||'[]'); setLocal(h.slice(0,20).map(x=>({ts:x.ts,desc:x.picks.map(p=>p.icon||p.text).join(' | ')}))) },[])
  return (<div style={{marginTop:20}}><h4>Recent Rolls (local)</h4><ul>{localScores.map((s,i)=>(<li key={i}>{new Date(s.ts).toLocaleString()} — {s.desc}</li>))}</ul></div>)
}
